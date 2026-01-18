
import ExpandingProjects from "@/components/expanding-projects";
import PageLayout from "@/components/ui/page-layout";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import SectionContent from "@/components/ui/section-content";

export default function ProjectsPage() {
  return (
    <PageLayout>
      <Section variant="default" showCorners={false} className="border-0">
        <SectionContent className="px-4 sm:px-6 pt-8 pb-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
              Projects
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A showcase of my work, experiments, and side projects.
            </p>
          </div>
        </SectionContent>
      </Section>

      <Section variant="bordered-b">
        <SectionHeader title="All Projects" />
        <SectionContent>
          <ExpandingProjects />
        </SectionContent>
      </Section>
    </PageLayout>
  );
}
