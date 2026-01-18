"use client";
import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { frontEndIcons, backEndIcons } from "@/lib/data/tech-stack";

interface TechItem {
  name: string;
  icon: string;
}

interface TechStackProps {
  items: TechItem[];
}


const StackList: React.FC<TechStackProps> = ({ items }) => (
  <div className="relative">
    <Marquee className="p-0" pauseOnHover={false}>
      <div className="flex gap-6">
        {items.map((tech, i) => (
          <div key={i} className="relative group text-center">
            <div
              className={cn(
                "w-12 h-12 border-none bg-gray-50 dark:bg-zinc-50 rounded-2xl p-3 transition-all duration-300",
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
          </div>
        ))}
      </div>
    </Marquee>
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
      <StackList items={frontEndIcons} />
      <StackList items={backEndIcons} />
    </div>
  );
};

export default TechStack;
