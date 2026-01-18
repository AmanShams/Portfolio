import React from "react";

interface SectionHeaderProps {
    title: string;
    children?: React.ReactNode;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, children }) => {
    return (
        <div className="relative flex h-14 justify-between items-center px-4 sm:px-6 flex-wrap gap-3 bg-[#f9f9f9] dark:bg-[#292929] text-slate-900 dark:text-slate-100 border-dotted border-primary/30">
            <div className="hidden sm:block absolute bottom-[-1px] -left-[4rem] -right-[4rem] h-px border-t border-dotted border-primary/30 pointer-events-none" />

            <h2 className="text-sm font-bold tracking-[0.2em] uppercase opacity-80">
                {title}
            </h2>
            {children}
        </div>
    );
};

export default SectionHeader;
