import React from "react";
import { Calendar, MapPin } from "lucide-react";
import { Badge } from "./ui/badge";

const experiences = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Cross Solution",
    duration: "April 2024 - Present",
    location: "Onsite",
    description:
      "Developed and maintained web applications using React and Typescript/Javascript. Also contributed to backend development by creating and maintaining APIs using ASP.NET. Collaborated with team to deliver features effectively and ensure smooth project execution.",
    skills: ["React", "TypeScript", "Javascript", "Asp.net", "SQL"],
  },
  {
    id: 2,
    role: "Mern Stack Intern",
    company: "CodeHub Skardu",
    duration: "Oct 2024 - Jan 2025",
    location: "Onsite",
    description:
      "Built responsive web applications using React and Next.js. Implemented state management with Redux and optimized performance for better user experience. Worked closely with UX designers to implement pixel-perfect designs.",
    skills: ["React", "Typescript", "Redux", "Javascript", "Figma"],
  },
];

const ProfessionalExperience = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <h2 className="text-xl font-bold tracking-tight mb-6">
        Professional Experience
      </h2>

      <div className="relative">
        {/* Vertical Timeline Line */}
        <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-border z-0"></div>

        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative flex gap-4 group">
              {/* Timeline Dot */}
              <div className="flex-shrink-0 w-8 h-8 md:w-12 md:h-12 flex items-center justify-center z-10">
                <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-cyan-500 border-2 border-background shadow-sm"></div>
              </div>

              {/* Content Card */}
              <div className="flex-1 group rounded-lg border-l border-border bg-card p-4 transition-all duration-300 cursor-pointer">
                <div className="flex flex-col gap-3">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="text-[10px] font-medium text-cyan-500 tracking-wide">
                          EXPERIENCE
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>

                      <h3 className="text-base font-semibold text-foreground leading-tighter tracking-tighter mb-1">
                        {exp.role}
                      </h3>

                      <div className="flex items-center gap-1 text-muted-foreground text-xs">
                        <MapPin className="h-3 w-3" />
                        <span>
                          {exp.company} • {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1">
                    {exp.skills.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-[10px] px-2 py-0.5 font-normal bg-muted/50 text-muted-foreground border border-neutral-200 dark:border-neutral-700"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalExperience;
