import React from "react";
import { Calendar, MapPin } from "lucide-react";
import { Badge } from "./ui/badge";
import { experiences } from "@/lib/data/experience";


const ProfessionalExperience = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <div className="relative">
        <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-border z-0"></div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex gap-2 md:4 group">
              <div className="flex-shrink-0 w-8 h-8 md:w-12 md:h-12 flex items-center justify-center z-10">
                <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-cyan-500 border-2 border-background shadow-sm"></div>
              </div>

              <div className="flex-1 group bg-card p-4 transition-all duration-300 cursor-pointer">
                <div className="flex flex-col gap-3">
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

                      <h3 className="text-lg font-semibold text-foreground leading-tighter tracking-tight mb-1">
                        {exp.role}
                      </h3>

                      <div className="flex items-center gap-1 text-muted-foreground text-base">
                        <MapPin className="h-3 w-3" />
                        <span>
                          {exp.company} • {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-base leading-relaxed">
                    {exp.description}
                  </p>

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
