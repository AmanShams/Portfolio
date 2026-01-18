import React from "react";
import { cn } from "@/lib/utils";

interface PageLayoutProps {
    children: React.ReactNode;
    className?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, className }) => {
    return (
        <main className={cn(
            "relative tracking-tight mx-auto pt-20 max-w-7xl bg-grid bg-dashed-grid overflow-hidden",
            className
        )}>
            <div className="absolute inset-0 bg-gradient-to-b bg-background pointer-events-none" />

            <div className="absolute left-1/2 -ml-[36rem] top-0 bottom-0 w-px border-l border-dotted border-primary/30 pointer-events-none hidden xl:block" />
            <div className="absolute left-1/2 ml-[36rem] top-0 bottom-0 w-px border-l border-dotted border-primary/30 pointer-events-none hidden xl:block" />

            <div className="absolute left-0 top-0 bottom-0 w-px border-l border-[1.5px] border-solid border-primary/10 pointer-events-none hidden xl:block" />
            <div className="absolute right-0 top-0 bottom-0 w-px border-r border-[1.5px] border-solid border-primary/10 pointer-events-none hidden xl:block" />

            {children}
        </main>
    );
};

export default PageLayout;
