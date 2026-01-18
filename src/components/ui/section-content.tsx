import React from "react";

interface SectionContentProps {
    children: React.ReactNode;
    className?: string;
}

const SectionContent: React.FC<SectionContentProps> = ({ children, className }) => {
    return (
        <div className={className || "px-4 sm:px-6 py-8 md:py-12"}>
            {children}
        </div>
    );
};

export default SectionContent;
