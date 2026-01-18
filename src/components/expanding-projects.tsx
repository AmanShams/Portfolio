'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ExpandingGrids, ExpandingGridCell } from './expanding-grids';
import { clsx } from 'clsx';
import { Github, ExternalLink, ArrowRight, ArrowDown, ArrowUp } from "lucide-react";
import { projects } from '@/lib/data/projects';


const ProjectGridItem = ({ project }: { project: typeof projects[0] }) => {
    const isPrivateGithub = (!project.githubUrl || project.githubUrl === '#' || project.githubUrl === '');
    const isPrivateLive = (!project.liveUrl || project.liveUrl === '#' || project.liveUrl === '');
    const [showDescription, setShowDescription] = useState(false)

    const handleShowDescription = () => {
        setShowDescription((prev) => prev = !prev)
    }

    return (
        <div
            className="relative w-full h-full overflow-hidden rounded-xl bg-muted group cursor-pointer"
            onClick={handleShowDescription}
        >
            <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className={`absolute  inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${showDescription && "backdrop-blur-xl transition-all duration-300 ease-in-out"}`} />

            <div className={`absolute bottom-0 left-3 right-3 translate-y-[120%] group-hover:translate-y-0 transition-transform duration-500 ease-out z-20`}>
                <div className="bg-zinc-50 dark:bg-zinc-900 border-x border-t border-zinc-200 dark:border-white/10 rounded-t-2xl overflow-hidden shadow-[0_10px_50px_-10px_rgba(0,0,0,0.5)] flex flex-col">

                    <div className="p-3 pb-2">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase">
                                {project.type}
                            </span>
                            <span className="text-xs font-bold text-zinc-600 dark:text-zinc-300 bg-white/50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 px-2 py-0.5 rounded-full shadow-xs">
                                {project.tech}
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <h3 className="text-base font-bold text-zinc-950 dark:text-white tracking-tight">
                                {project.title}
                            </h3>
                            <div className="flex items-center gap-3">
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "text-zinc-400 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-white transition-all duration-300",
                                        isPrivateGithub && "cursor-not-allowed opacity-20"
                                    )}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        if (isPrivateGithub) e.preventDefault();
                                    }}
                                >
                                    <Github className="w-3.5 h-3.5" />
                                </a>

                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "text-zinc-400 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-white transition-all duration-300",
                                        isPrivateLive && "cursor-not-allowed opacity-20"
                                    )}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        if (isPrivateLive) e.preventDefault();
                                    }}
                                >
                                    <ExternalLink className="w-3.5 h-3.5" />
                                </a>

                                <div className="text-zinc-400 dark:text-zinc-500">
                                    {showDescription ? (
                                        <ArrowUp className="w-3.5 h-3.5" />
                                    ) : (
                                        <ArrowDown className="w-3.5 h-3.5" />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={clsx(
                        "grid transition-all duration-700 ease-in-out bg-white dark:bg-zinc-950 rounded-t-2xl shadow-[0_-4px_10px_rgba(0,0,0,0.03)]",
                        showDescription ? "grid-rows-[1fr] opacity-100 p-4" : "grid-rows-[0fr] opacity-0"
                    )}>
                        <div className="overflow-hidden">
                            <p className="text-sm text-zinc-600 dark:text-zinc-400 font-medium leading-[1.5]">
                                {project.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default function ExpandingProjects() {
    const [columns, setColumns] = useState(3);

    useEffect(() => {
        const updateColumns = () => {
            if (window.innerWidth < 768) {
                setColumns(1);
            } else if (window.innerWidth < 1024) {
                setColumns(2);
            } else {
                setColumns(3);
            }
        };

        updateColumns();
        window.addEventListener('resize', updateColumns);
        return () => window.removeEventListener('resize', updateColumns);
    }, []);

    const rows = Math.ceil(projects.length / columns);
    const totalSlots = rows * columns;

    return (
        <div
            className="w-full py-6"
            style={{ height: `${rows * 360}px` }}
        >
            <ExpandingGrids
                rows={rows}
                columns={columns}
                gap={20}
                expandRatio={2.5}
                duration={500}
            >
                {projects.map((project, index) => (
                    <ExpandingGridCell key={index} className="group">
                        <ProjectGridItem project={project} />
                    </ExpandingGridCell>
                ))}

                {Array.from({ length: totalSlots - projects.length }).map((_, i) => (
                    <ExpandingGridCell key={`placeholder-${i}`} className="invisible pointer-events-none">
                        <div />
                    </ExpandingGridCell>
                ))}
            </ExpandingGrids>
        </div>
    );
}
