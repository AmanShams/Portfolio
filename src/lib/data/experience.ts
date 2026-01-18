export interface Experience {
    id: number;
    role: string;
    company: string;
    duration: string;
    location: string;
    description: string;
    skills: string[];
}

export const experiences: Experience[] = [
    {
        id: 1,
        role: "MERN Stack Developer",
        company: "Code Skardu",
        duration: "September 2025 - Present",
        location: "Onsite",
        description:
            "Working as a MERN Stack Developer at Code Skardu, primarily focusing on TypeScript and Next.js to build high-performance, SEO-friendly, and scalable web applications.",
        skills: ["React", "TypeScript", "Javascript", "Asp.net", "SQL"],
    },
    {
        id: 2,
        role: "Full Stack Developer",
        company: "Cross Solution",
        duration: "April 2024 - September 2025",
        location: "Onsite",
        description:
            "Developed and maintained web applications using React and Typescript/Javascript. Also contributed to backend development by creating and maintaining APIs using ASP.NET. Collaborated with team to deliver features effectively and ensure smooth project execution.",
        skills: ["React", "TypeScript", "Javascript", "Asp.net", "SQL"],
    },
    {
        id: 3,
        role: "Mern Stack Intern",
        company: "Digital Hub",
        duration: "Oct 2024 - Jan 2025",
        location: "Onsite",
        description:
            "Built responsive web applications using React and Next.js. Implemented state management with Redux and optimized performance for better user experience. Worked closely with UX designers to implement pixel-perfect designs.",
        skills: ["React", "Typescript", "Redux", "Javascript", "Figma"],
    },
];
