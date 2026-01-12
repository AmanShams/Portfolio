import React from "react";
import { ArrowUpRight } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Frontend Development Libraries",
      issuer: "freeCodeCamp",
      verifyUrl:
        "https://www.freecodecamp.org/certification/fcc187d5db9-784d-4f43-a312-b441861c2f7d/front-end-development-libraries",
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold tracking-tight mb-6">Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certifications.map((cert) => (
          <article
            key={cert.id}
            className="rounded-lg border border-border bg-card p-4 transition-all duration-300 hover:border-muted-foreground/30 cursor-pointer"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center">
                  {/* Inline SVG with theme support */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-8 h-8 fill-neutral-900 dark:fill-neutral-100"
                  >
                    <path d="M424.9 9.4c-8.7-8.3-22.5-8-30.8.7-8.3 8.7-8 22.5.7 30.8C451.8 93.5 480 155.2 480 224s-28.2 130.5-85.2 183.1c-8.7 8.3-9 22.1-.7 30.8 8.3 8.7 22.1 9 30.8.7C490.6 378.3 528 305.8 528 224S490.6 69.7 424.9 9.4zM117.1 9.4C51.4 69.7 14 142.2 14 224s36.4 154.3 103.1 214.6c8.7 8.3 22.5 8 30.8-.7 8.3-8.7 8-22.5-.7-30.8C90.2 354.5 62 292.8 62 224s28.2-130.5 85.2-183.1c8.7-8.3 9-22.1.7-30.8-8.3-8.7-22.1-9-30.8-.7zM283.9 51.1c3.8 22.8.4 45.4-9.8 70.3-16.6 39.3-42.5 73.4-64.1 106.4-30.8 46.8-48.8 88.3-43.8 128.4 5.5 43.4 39.5 81.4 78.9 92.2-29.4-18.6-36.9-58.8-24.5-95.1 7.8-23 23.1-46.1 37.7-67.7 14.2-21 27.4-41.1 36.4-64.2 11.8 20.6 14.5 50.3 9.1 83.5-4.9 31.3-1.6 55.5 10.6 70.8 13 16.2 35 21.8 61.8 16 11.8 18.2 8.6 51.3-24.6 88.7 50.2-30.3 80.5-84.1 75.3-140.6-2.9-31.5-14.8-60.6-33.8-86.1-8.3 14.9-18.9 28.7-32.4 25.9-12.1-2.4-5.5-23.4-1.4-44.1 4.6-23.2 3.8-48.2-2.6-71.1-10.1-35.9-32.3-62.7-59.2-86.4z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    {cert.title}
                  </p>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </div>
              </div>
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-medium text-muted-foreground hover:text-foreground transition-colors mt-1"
              >
                Verify <ArrowUpRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
