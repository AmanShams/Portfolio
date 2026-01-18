export interface TechItem {
    name: string;
    slug: string;
}

export interface TechItemWithIcon extends TechItem {
    icon: string;
}

export const backEndTech: TechItem[] = [
    { name: "Node.js", slug: "nodedotjs" },
    { name: "Express", slug: "express" },
    { name: "PostgreSQL", slug: "postgresql" },
    { name: "MongoDb", slug: "mongoDb" },
    { name: ".NET Core", slug: "dotnet" },
    { name: "Git", slug: "git" },
    { name: "GitHub", slug: "github" },
    { name: "Postman", slug: "postman" },
    { name: "Swagger", slug: "swagger" },
    { name: "Docker", slug: "docker" },
    { name: "Prisma", slug: "prisma" },
];

export const frontEndTech: TechItem[] = [
    { name: "HTML", slug: "html5" },
    { name: "CSS", slug: "css" },
    { name: "JavaScript", slug: "javascript" },
    { name: "React", slug: "react" },
    { name: "Next.js", slug: "nextdotjs" },
    { name: "Tailwind CSS", slug: "tailwindcss" },
    { name: "Shadcn UI", slug: "shadcnui" },
    { name: "Vite", slug: "vite" },
];

export const frontEndIcons: TechItemWithIcon[] = frontEndTech.map((tech) => ({
    ...tech,
    icon: `https://cdn.simpleicons.org/${tech.slug}`,
}));

export const backEndIcons: TechItemWithIcon[] = backEndTech.map((tech) => ({
    ...tech,
    icon: `https://cdn.simpleicons.org/${tech.slug}`,
}));
