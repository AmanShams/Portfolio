export interface Project {
    type: string;
    title: string;
    organization: string;
    image: string;
    tech: string;
    time: string;
    githubUrl: string;
    liveUrl: string;
    description: string;
}

export const projects: Project[] = [
    {
        type: 'Full Stack',
        title: 'Multi Tenant SMS',
        organization: 'Multi Tenant System',
        image: '/ilemes.png',
        tech: 'React + Node + PostgreSQL',
        time: '2024',
        githubUrl: '#',
        liveUrl: 'https://ilemes.vercel.app',
        description:
            'A comprehensive multi-tenant institute management system that handles multiple educational institutions under a single platform with separate data isolation and customized workflows. A comprehensive multi-tenant institute management system that handles multiple educational institutions under a single platform with separate data isolation and customized workflows. A comprehensive multi-tenant institute management system that handles multiple educational institutions under a single platform with separate data isolation and customized workflows. A comprehensive multi-tenant institute management system that handles multiple educational institutions under a single platform with separate data isolation and customized workflows. A comprehensive multi-tenant institute management system that handles multiple educational institutions under a single platform with separate data isolation and customized workflows. A comprehensive multi-tenant institute management system that handles multiple educational institutions under a single platform with separate data isolation and customized workflows.',
    },
    {
        type: 'Web App',
        title: 'Restaurant POS',
        organization: 'Point of Sale System',
        image: '/pos.png',
        tech: 'React + Redux Toolkit + Tailwind',
        time: '2024',
        githubUrl: '#',
        liveUrl: '#',
        description:
            'A modern Point of Sale system for restaurants with order management, billing, inventory tracking, and real-time updates for efficient restaurant operations.',
    },
    {
        type: 'Web App',
        title: 'Admin Dashboard',
        organization: 'Data Management',
        image: '/nowrthadmin.png',
        tech: 'React + CoreUI',
        time: '2024',
        githubUrl: '#',
        liveUrl: '#',
        description:
            'Feature-rich admin dashboard for data management, analytics, and user management with intuitive UI and comprehensive reporting capabilities.',
    },
    {
        type: 'Web App',
        title: 'AI Web IDE',
        organization: 'Development Tool',
        image: '/webIde.png',
        tech: 'NextJS + Gemini API',
        time: '2024',
        githubUrl: 'https://github.com/AmanShams/webCursor',
        liveUrl: 'https://playground.amanshams.pro',
        description:
            'An intelligent web-based IDE powered by AI that provides code suggestions, debugging assistance, and automated code generation using Gemini API.',
    },
    {
        type: 'Portfolio',
        title: 'Personal Portfolio',
        organization: 'Developer Centric design',
        image: '/portfolio.png',
        tech: 'NEXTJS + Shadcn',
        time: '2024',
        githubUrl: '#',
        liveUrl: 'https://amanshams.pro',
        description:
            'A developer-centric portfolio website showcasing projects, skills, and experience with clean design and modern development practices.',
    },
    {
        type: 'Portfolio',
        title: 'Terminal Inspired Portfolio',
        organization: 'Developer Centric design',
        image: '/terminalp.png',
        tech: 'NEXTJS + TypeScript',
        time: '2025',
        githubUrl: '#',
        liveUrl: 'https://terminal.amanshams.pro',
        description:
            'A developer-centric portfolio website showcasing projects, skills, and experience with clean design and modern development practices.',
    },
    {
        type: 'Chrome Extension',
        title: 'YT-Focus',
        organization: 'Developer Centric design',
        image: '/yt-fucus.png',
        tech: 'NEXTJS + TypeScript',
        time: '2025',
        githubUrl: '#',
        liveUrl: 'https://yt-focus.amanshams.pro',
        description:
            'A developer-centric portfolio website showcasing projects, skills, and experience with clean design and modern development practices.',
    },
];
