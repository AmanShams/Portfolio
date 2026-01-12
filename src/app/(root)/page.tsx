import Link from "next/link";
import { allBlogs } from "content-collections";
import { ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import TechStack from "./_components/tech-stack";
import BlogCard from "../blog/_components/blog-card";
import { DockDemo } from "@/components/bottomDock";
import HeaderSection from "@/components/HeaderSection";
import GetInTouchSection from "@/components/getInTouch";
import Certifications from "@/components/Certifications";
import ExpandingProjects from "@/components/expanding-projects";
import ProfessionalExperience from "@/components/professional-experience";

export default function Page() {
  const latestBlog = allBlogs
    .sort(
      (a, b) =>
        new Date(b.publishedOn).getTime() - new Date(a.publishedOn).getTime()
    )
    .slice(0, 3);

  return (
    <main className="relative tracking-tight mx-auto pt-14 max-w-7xl bg-gradient-to-b">
      <DockDemo />

      {/* Hero / Header Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 border-b border-neutral-200/50 dark:border-neutral-700/50 space-y-8">
        <div className="max-w-5xl">
          <HeaderSection />
        </div>
      </section>

      {/* Latest Projects */}
      <section className="relative max-w-6xl mx-auto px-4 sm:px-6 py-6 border-b border-neutral-200/50 dark:border-neutral-700/50">
        <div className="flex justify-between mb-1 flex-wrap gap-3">
          <h2 className="text-xl font-bold tracking-tight">
            Selected Projects
          </h2>
          <Link href="/projects" aria-label="See all projects">
            <Button variant="outline" size="sm">
              All Projects
              <ExternalLink className="size-4 ml-1" />
            </Button>
          </Link>
        </div>
        <ExpandingProjects />
      </section>

      {/* Experience Section */}
      <section
        id="professional-experience"
        className="relative max-w-6xl mx-auto px-4 sm:px-6 py-8 border-b border-neutral-200/50 dark:border-neutral-700/50"
      >
        <ProfessionalExperience />
      </section>

      {/* Certifications Section */}
      <section
        id="certifications"
        className="relative max-w-6xl mx-auto px-4 sm:px-6 py-8 border-b border-neutral-200/50 dark:border-neutral-700/50"
      >
        <Certifications />
      </section>

      {/* Tech Stack */}
      <section className="relative max-w-6xl mx-auto px-4 sm:px-6 py-6 border-b border-neutral-200/50 dark:border-neutral-700/50">
        <h2 className="text-xl font-bold tracking-tight mb-6">
          Technology Stack
        </h2>
        <TechStack />
      </section>

      {/* Recent Blog */}
      <section className="relative max-w-6xl mx-auto px-4 sm:px-6 py-8 border-b border-neutral-200/50 dark:border-neutral-700/50">
        <div className="flex justify-between mb-6 flex-wrap gap-3">
          <h2 className="text-xl font-bold tracking-tight">Recent Blog</h2>
          <Link href="/blog" aria-label="See all blogs">
            <Button variant="outline" size="sm">
              All Blogs
              <ExternalLink className="size-4 ml-1" />
            </Button>
          </Link>
        </div>
        <div className="flex gap-4 flex-wrap">
          {latestBlog.map((blog) => (
            <div key={blog.slug} className="w-full sm:w-[48%] lg:w-[32%]">
              <BlogCard {...blog} />
            </div>
          ))}
        </div>
      </section>

      <section>
        <GetInTouchSection />
      </section>
    </main>
  );
}
