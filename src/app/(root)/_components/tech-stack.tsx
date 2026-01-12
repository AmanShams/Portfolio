"use client";
import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface TechItem {
  name: string;
  icon: string;
}

interface TechStackProps {
  items: TechItem[];
}

// Back-End Tech
const backEndTech = [
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

// Front-End Tech
const frontEndTech = [
  { name: "HTML", slug: "html5" },
  { name: "CSS", slug: "css" },
  { name: "JavaScript", slug: "javascript" },
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "Tailwind CSS", slug: "tailwindcss" },
  { name: "Shadcn UI", slug: "shadcnui" },
  { name: "Vite", slug: "vite" },
];

const frontEndIcons = frontEndTech.map((tech) => ({
  ...tech,
  icon: `https://cdn.simpleicons.org/${tech.slug}`,
}));

const backEndIcons = backEndTech.map((tech) => ({
  ...tech,
  icon: `https://cdn.simpleicons.org/${tech.slug}`,
}));

const StackList: React.FC<TechStackProps> = ({ items }) => (
  <div className="relative">
    {" "}
    {/* Added relative container */}
    <Marquee className="p-0" pauseOnHover={false}>
      <div className="flex gap-2">
        {items.map((tech, i) => (
          <div key={i} className="relative group text-center">
            <div
              className={cn(
                "w-10 h-10 border-none bg-gray-50 dark:bg-zinc-50 rounded-xl p-2 transition-all duration-300",
                "shadow-neumorphic-sm dark:shadow-neumorphic-inset-sm",
                "flex items-center justify-center"
              )}
            >
              <Image
                src={tech.icon}
                alt={`${tech.name} logo`}
                width={24}
                height={24}
                loading="lazy"
              />
            </div>
            {/* Uncomment if you want labels:
            <span className="text-xs mt-1 block text-gray-600 dark:text-zinc-300">{tech.name}</span> */}
          </div>
        ))}
      </div>
    </Marquee>
    {/* Gradient overlays now contained within each marquee */}
    <div
      className={cn(
        "pointer-events-none absolute h-full inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white dark:from-black z-10"
      )}
    ></div>
    <div
      className={cn(
        "pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white dark:from-black z-10"
      )}
    ></div>
  </div>
);

const TechStack = () => {
  return (
    <div className="space-y-2">
      {" "}
      {/* Removed relative from here */}
      <StackList items={frontEndIcons} />
      <StackList items={backEndIcons} />
    </div>
  );
};

export default TechStack;
