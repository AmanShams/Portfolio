import PageLayout from "@/components/ui/page-layout";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import SectionContent from "@/components/ui/section-content";
import ProfessionalExperience from "@/components/professional-experience";

export default function WorkPage() {
    return (
        <PageLayout>
            <Section variant="default" showCorners={false} className="border-0">
                <SectionContent className="px-4 sm:px-6 pt-8 pb-4">
                    <div className="max-w-6xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
                            Work Experience
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl">
                            My professional journey and the companies I've worked with.
                        </p>
                    </div>
                </SectionContent>
            </Section>

            <Section variant="bordered-b">
                <SectionHeader title="Professional Experience" />
                <SectionContent>
                    <ProfessionalExperience />
                </SectionContent>
            </Section>
        </PageLayout>
    );
}
