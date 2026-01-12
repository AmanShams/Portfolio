import { NextResponse } from "next/server";

interface ContributionDay {
  date: string;
  contributionCount: number;
  contributions: {
    message: string;
    url: string;
  }[];
}

export async function GET() {
  const token = process.env.GITHUB_PERSONAL_ACCESS_TOKEN;

  if (!token) {
    return NextResponse.json(
      { error: "GitHub token is missing" },
      { status: 500 }
    );
  }

  const today = new Date();
  const days18Ago = new Date(today);
  days18Ago.setDate(today.getDate() - 56);

  const query = `
    query($username: String!, $from: DateTime!, $to: DateTime!) {
        user(login: $username) {
            contributionsCollection(from: $from, to: $to) {
                contributionCalendar {
                    totalContributions
                    weeks {
                        contributionDays {
                            contributionCount
                            date
                        }
                    }
                }
            }
        }
    }`;

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: {
          username: "amanshams",
          from: days18Ago.toISOString(),
          to: today.toISOString(),
        },
      }),
    });

    const data = await response.json();

    if (data.errors) {
      console.error("GitHub API Errors:", data.errors);
      return NextResponse.json({ error: "GitHub API Error" }, { status: 500 });
    }

    if (!data.data?.user) {
      return NextResponse.json({ error: "User not found or no data" }, { status: 404 });
    }

    const contributions =
      data.data.user.contributionsCollection.contributionCalendar.weeks
        .flatMap(
          (week: { contributionDays: ContributionDay[] }) => week.contributionDays
        )
        .map((day: ContributionDay) => ({
          date: day.date,
          count: day.contributionCount,
        }));

    return NextResponse.json(contributions);
  } catch (error) {
    console.error("Error fetching GitHub commits:", error);
    return NextResponse.json(
      { error: "Failed to fetch commits" },
      { status: 500 }
    );
  }
}
