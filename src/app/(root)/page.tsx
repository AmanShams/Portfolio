import Link from "next/link";
import { allBlogs } from "content-collections";
import { ArrowUpRight, Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import TechStack from "./_components/tech-stack";
import BlogCard from "../blog/_components/blog-card";
import HeaderSection from "@/components/HeaderSection";
import GetInTouchSection from "@/components/getInTouch";
import Certifications from "@/components/Certifications";
import ExpandingProjects from "@/components/expanding-projects";
import ProfessionalExperience from "@/components/professional-experience";
import Services from "./_components/services";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import SectionContent from "@/components/ui/section-content";
import CornerPlus from "@/components/ui/corner-plus";
import PageLayout from "@/components/ui/page-layout";

export default function Page() {
  const latestBlog = allBlogs
    .sort(
      (a, b) =>
        new Date(b.publishedOn).getTime() - new Date(a.publishedOn).getTime()
    )
    .slice(0, 3);

  return (
    <PageLayout>
      <section className="relative max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12 border-0 space-y-12">
        <CornerPlus className="-bottom-2 -left-2" />
        <CornerPlus className="-bottom-2 -right-2" />

        <div className="max-w-5xl">
          <HeaderSection />
        </div>
        <div className="flex gap-4">
          <Button variant={"outline"} size="sm" className="tracking-wide text-base">
            Download Resume
            <Download className="size-4 ml-1" />
          </Button>
          <Button variant={"default"} size="sm" className="tracking-wide text-base">
            Cantact Me
            <ArrowUpRight className="size-4 ml-1" />
          </Button>
        </div>
      </section>

      <Section variant="bordered-y">
        <SectionHeader title="Expertise" />
        <SectionContent>
          <Services />
        </SectionContent>
      </Section>

      <Section variant="bordered-b">
        <SectionHeader title="Selected Projects">
          <Link href="/projects" aria-label="See all projects">
            <Button variant={"link"} size="sm" className="tracking-wide text-base">
              All Projects
              <ArrowUpRight className="size-4 ml-1" />
            </Button>
          </Link>
        </SectionHeader>
        <SectionContent>
          <ExpandingProjects />
        </SectionContent>
      </Section>

      <Section id="professional-experience" variant="bordered-b">
        <SectionHeader title="Professional Experience" />
        <SectionContent>
          <ProfessionalExperience />
        </SectionContent>
      </Section>

      <Section variant="bordered-b">
        <SectionHeader title="Technology Stack" />
        <SectionContent>
          <TechStack />
        </SectionContent>
      </Section>

      <Section id="certifications" variant="bordered-b">
        <SectionHeader title="Certifications" />
        <SectionContent>
          <Certifications />
        </SectionContent>
      </Section>

      <Section variant="bordered-b">
        <SectionHeader title="Recent Blog">
          <Link href="/blog" aria-label="See all blogs">
            <Button variant="link" size="sm" className="tracking-wide text-base">
              All Blogs
              <ArrowUpRight className="size-4 ml-1" />
            </Button>
          </Link>
        </SectionHeader>
        <SectionContent>
          <div className="flex gap-4 flex-wrap">
            {latestBlog.map((blog) => (
              <div key={blog.slug} className="w-full sm:w-[48%] lg:w-[32%]">
                <BlogCard {...blog} />
              </div>
            ))}
          </div>
        </SectionContent>
      </Section>

      <section>
        <GetInTouchSection />
      </section>
    </PageLayout>
  );
}
