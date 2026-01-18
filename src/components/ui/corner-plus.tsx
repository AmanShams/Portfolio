import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const CornerPlus = ({ className }: { className?: string }) => {
    return (
        <div className={cn("absolute size-4 flex items-center justify-center text-muted-foreground/40 z-10", className)}>
            <div className="absolute top-1/2 -top-[100vh] bottom-[-100vh] w-px border-l border-dotted border-primary/20 pointer-events-none" />

            <div className={cn(
                "absolute top-1/2 h-[1px] border-t border-dotted border-primary/30 pointer-events-none",
                className?.includes("-left-") ? "right-1/2 w-[4rem]" : "left-1/2 w-[4rem]"
            )} />

            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-full relative z-10 p-0.5"
            >
                <line x1="12" y1="6" x2="12" y2="18" />
                <line x1="6" y1="12" x2="18" y2="12" />
            </svg>
        </div>
    );
};

export default CornerPlus;
