"use client";
import { useEffect, useState } from "react";
import { Sunrise, Sun, Sunset, Coffee, Moon, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const timeIcons = [
  { icon: Sunrise, range: [5, 8] },
  { icon: Sun, range: [8, 10] },
  { icon: Sunset, range: [10, 17] },
  { icon: Coffee, range: [17, 20] },
  { icon: Moon, range: [20, 24] },
];

export default function LocationTime({ className }: { className?: string }) {
  const [time, setTime] = useState({
    display: "",
    icon: null as React.ReactNode,
  });

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Karachi",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });

      const hour = parseInt(
        new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Karachi",
          hour: "numeric",
          hour12: false,
        }).format(now)
      );

      const { icon: Icon } = timeIcons.find(
        ({ range: [start, end] }) => hour >= start && hour < end
      ) || { icon: Moon };

      setTime({
        display: formatter.format(now),
        icon: <Icon className="w-4 h-4 text-foreground/50" />,
      });
    };

    update();
    const interval = setInterval(update, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cn("w-full sm:w-fit rounded-md space-y-0", className)}>
      <div className="flex items-center gap-2">
        <MapPin className="w-3 h-3 text-foreground/50" />
        <span className="text-[8px] lg:text-xs font-semibold text-foreground/50 whitespace-nowrap">
          Skardu, Gilgit Baltistan
        </span>
      </div>
      <div className="flex items-center gap-2">
        {time.icon}
        <span className="text-[8px] lg:text-xs font-medium text-foreground/50">
          {time.display} PST
        </span>
      </div>
    </div>
  );
}
