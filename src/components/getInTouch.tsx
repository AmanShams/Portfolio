import { Mail } from "lucide-react";

import CornerPlus from "./ui/corner-plus";

export default function GetInTouchSection() {
  return (
    <section className="relative max-w-6xl mx-auto px-4 sm:px-6 py-8 border-b border-x-0 border-border/50 bg-background/50 ">
      <CornerPlus className="-bottom-2 -left-2" />
      <CornerPlus className="-bottom-2 -right-2" />
      <div className="flex justify-between mb-6 flex-wrap gap-3">
        <h2 className="text-2xl font-bold tracking-tight">Get In Touch</h2>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-1 space-y-4">
          <p className="text-base text-foreground/80">
            I'm open for freelancing opportunities and job positions! Whether
            you have a project in mind <br /> or want to discuss potential
            collaborations, feel free to reach out.
          </p>

          <a
            href="mailto:amanullahshams.dev@gmail.com"
            className="inline-flex items-center gap-2 text-base font-medium border-b-2 border-foreground/20 hover:border-foreground/40 transition-colors"
          >
            <Mail className="w-5 h-5" />
            amanullahshams.dev@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
