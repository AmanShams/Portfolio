
import ExpandingProjects from "@/components/expanding-projects";

export default function page() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex justify-between mb-12">
        <h2 className="text-3xl font-bold tracking-tight">All My Projects</h2>
      </div>
      <ExpandingProjects />
    </section>
  );
}
