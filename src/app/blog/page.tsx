import { allBlogs } from "content-collections";
import { Categories } from "@/constants";
import { Button } from "@/components/ui/button";
import BlogCard from "./_components/blog-card";
import PageLayout from "@/components/ui/page-layout";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import SectionContent from "@/components/ui/section-content";
import { Badge } from "@/components/ui/badge";

export default function page() {
  return (
    <PageLayout>
      <Section variant="default" showCorners={false} className="border-0">
        <SectionContent className="px-4 sm:px-6 pt-8 pb-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
              Blog
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Thoughts, tutorials, and insights on web development, design, and technology.
            </p>
          </div>
        </SectionContent>
      </Section>

      <Section variant="bordered-b">
        <SectionHeader title="All Articles" />
        <SectionContent>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              <aside className="md:w-64 flex-shrink-0">
                <div className="sticky top-24 space-y-6">
                  <div>
                    <h3 className="text-sm font-bold tracking-[0.2em] uppercase opacity-80 mb-4">
                      Categories
                    </h3>
                    <div className="flex flex-wrap md:flex-col gap-2">
                      {Categories.map((category, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {category}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="hidden md:block">
                    <h3 className="text-sm font-bold tracking-[0.2em] uppercase opacity-80 mb-4">
                      Total Posts
                    </h3>
                    <p className="text-3xl font-bold">{allBlogs.length}</p>
                  </div>
                </div>
              </aside>

              <div className="flex-1">
                <div className="grid md:grid-cols-2 gap-6">
                  {allBlogs.map((blog) => (
                    <BlogCard key={blog.slug} {...blog} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </SectionContent>
      </Section>
    </PageLayout>
  );
}
