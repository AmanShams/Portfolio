'use client';

import React from 'react';
import Image from 'next/image';
import { ExpandingGrids, ExpandingGridCell } from './expanding-grids';
import { clsx } from 'clsx';
import { Github, ExternalLink } from "lucide-react";

const projects = [
    {
        type: 'Full Stack',
        title: 'Institute Management (Multi Tenant)',
        organization: 'Multi Tenant System',
        image: '/ilemes.png',
        tech: 'React + Node + PostgreSQL',
        time: '2024',
        githubUrl: '#',
        liveUrl: 'https://ilemes.vercel.app',
        description:
            'A comprehensive multi-tenant institute management system that handles multiple educational institutions under a single platform with separate data isolation and customized workflows.',
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
        tech: 'React + Bootstrap',
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
        tech: 'NEXTJS',
        time: '2025',
        githubUrl: '#',
        liveUrl: 'https://terminal.amanshams.pro',
        description:
            'A developer-centric portfolio website showcasing projects, skills, and experience with clean design and modern development practices.',
    },
];

const ProjectGridItem = ({ project }: { project: typeof projects[0] }) => {
    const isPrivateGithub = (!project.githubUrl || project.githubUrl === '#' || project.githubUrl === '');
    const isPrivateLive = (!project.liveUrl || project.liveUrl === '#' || project.liveUrl === '');

    return (
        <div className="relative w-full h-full overflow-hidden rounded-xl bg-muted group">
            {/* Background Image */}
            <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient Overlay for better readability at the bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {/* Bottom Card - visible on hover/expand */}
            <div className="absolute bottom-4 left-4 right-4 translate-y-[120%] group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="bg-background/50 backdrop-blur-2xl border border-border/30 rounded-lg p-4 shadow-lg flex flex-col gap-3">

                    {/* Header: Type & Title */}
                    <div>
                        <div className="flex items-center justify-between mb-1">
                            <span className="text-[10px] font-bold text-muted-background uppercase tracking-wider">
                                {project.type}
                            </span>
                            <span className="text-[10px] text-muted-background font-medium bg-accent/50 px-2 py-0.5 rounded-full">
                                {project.tech}
                            </span>
                        </div>
                        <h3 className="text-lg font-bold text-foreground leading-tight">
                            {project.title}
                        </h3>
                        <p className="text-xs text-muted-background mt-0.5">{project.organization}</p>
                    </div>

                    {/* Description - Compact */}
                    <p className="text-xs text-foreground/50 line-clamp-2 leading-relaxed">
                        {project.description}
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-2 pt-1">
                        {/* GitHub Button */}
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className={clsx(
                                "flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors border border-border h-8",
                                isPrivateGithub
                                    ? "cursor-not-allowed opacity-50 bg-muted text-muted-foreground"
                                    : "bg-background hover:bg-accent hover:text-accent-foreground text-foreground"
                            )}
                            onClick={(e) => {
                                e.stopPropagation();
                                if (isPrivateGithub) e.preventDefault();
                            }}
                        >
                            <Github className="w-3.5 h-3.5" />
                            {isPrivateGithub ? 'Private' : 'Code'}
                        </a>

                        {/* Live Demo Button */}
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className={clsx(
                                "flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors border border-border h-8",
                                isPrivateLive
                                    ? "cursor-not-allowed opacity-50 bg-muted text-muted-foreground"
                                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                            )}
                            onClick={(e) => {
                                e.stopPropagation();
                                if (isPrivateLive) e.preventDefault();
                            }}
                        >
                            <ExternalLink className="w-3.5 h-3.5" />
                            {isPrivateLive ? 'Private' : 'Preview'}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function ExpandingProjects() {
    // We have 5 projects. We can use a 3x2 grid (6 cells).
    // The last cell will be hidden or empty.
    return (
        <div className="h-[600px] w-full py-6 ">
            <ExpandingGrids
                rows={2}
                columns={3}
                gap={16}
                expandRatio={2.5}
                duration={500}
            >
                {projects.map((project, index) => (
                    <ExpandingGridCell key={index} className="group">
                        <ProjectGridItem project={project} />
                    </ExpandingGridCell>
                ))}
                {/* Placeholder for the 6th cell to maintain grid structure */}
                {projects.length < 6 && (
                    <ExpandingGridCell className="invisible pointer-events-none">
                        <div />
                    </ExpandingGridCell>
                )}
            </ExpandingGrids>
        </div>
    );
}
