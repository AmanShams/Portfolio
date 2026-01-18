import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  image: string;
  description: string;
  publishedOn: string;
  slug: string;
}

const BlogCard = ({
  title,
  image,
  description,
  publishedOn,
  slug,
}: BlogCardProps) => {
  return (
    <Link href={`/blog/${slug}`} className="h-full">
      <div className="border border-zinc-200 dark:border-white/10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 h-full bg-zinc-50 dark:bg-zinc-900 overflow-hidden flex flex-col group">

        <div className="p-3">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-inner">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-950 rounded-t-3xl p-5 pt-4 mt-1 shadow-[0_-4px_20px_rgba(0,0,0,0.03)] flex-1">
          <h2 className="font-semibold text-base text-zinc-900 dark:text-white line-clamp-1 leading-tight tracking-tight">
            {title}
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-relaxed mt-2 font-medium">
            {description}
          </p>
          <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-3 font-semibold uppercase tracking-wider">
            {publishedOn}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
