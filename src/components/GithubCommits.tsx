"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Sunrise, Sun, Sunset, Coffee, Moon, MapPin } from "lucide-react";

// GithubCommits Component
interface Commit {
  date: Date;
  count: number;
  url: string;
}

export default function GithubCommits({ className }: { className?: string }) {
  const [commitGraph, setCommitGraph] = useState<Commit[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        const response = await fetch("/api/github/commits");
        const data = await response.json();
        if (Array.isArray(data)) {
          setCommitGraph(data);
        } else {
          setCommitGraph([]);
          console.error("Fetched data is not array: ", data);
        }
      } catch (error) {
        console.error("Failed to fetch commits:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCommits();
  }, []);

  const getCommitColor = (count: number) => {
    if (count === 0) return "bg-muted";
    if (count <= 2) return "bg-green-300 dark:bg-green-900";
    if (count <= 4) return "bg-green-400 dark:bg-green-800";
    if (count <= 6) return "bg-green-500 dark:bg-green-700";
    if (count <= 8) return "bg-green-600 dark:bg-green-600";
    if (count <= 10) return "bg-green-700 dark:bg-green-500";
    return "bg-green-800 dark:bg-green-400";
  };

  return (
    <div className={cn("flex items-center gap-1 p-1.5 w-fit", className)}>
      <div className="grid grid-rows-3 grid-flow-col gap-0.5 auto-cols-max">
        {loading
          ? Array.from({ length: 57 }).map((_, index) => (
            <div
              key={index}
              className="h-2 w-2 rounded-[1px] animate-pulse bg-muted"
            />
          ))
          : commitGraph.map((commit, index) => (
            <div key={index} className="relative group">
              <div
                className={`h-2 w-2 rounded-[1px] hover:scale-125 transition-all duration-200 cursor-pointer ${getCommitColor(
                  commit.count
                )}`}
              />
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-1.5 py-0.5 bg-foreground text-background rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                {commit.count} commits
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
