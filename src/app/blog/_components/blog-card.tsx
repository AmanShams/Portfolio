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
    <Link href={`/blog/${slug}`}>
      <Card className="border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 h-full bg-card border-border hover:border-muted-foreground/30">
        <CardContent className="space-y-2 p-3">
          <div className="relative aspect-[16/9] rounded-md overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h2 className="font-semibold text-sm text-foreground line-clamp-1 leading-tight">
            {title}
          </h2>
          <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
            {description}
          </p>
          <p className="text-xs text-muted-foreground/70 mt-0.5">
            {publishedOn}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogCard;
