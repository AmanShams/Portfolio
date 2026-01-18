import React from "react";
import { cn } from "@/lib/utils";
import CornerPlus from "./corner-plus";

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    variant?: "default" | "bordered-y" | "bordered-b";
    showCorners?: boolean;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
    ({ children, className, id, variant = "bordered-b", showCorners = true }, ref) => {
        const variantClasses = {
            default: "",
            "bordered-y": "border-y border-dotted border-primary/30 bg-background/20",
            "bordered-b": "border-b border-dotted border-primary/30 bg-background/50",
        };

        return (
            <section
                ref={ref}
                id={id}
                className={cn(
                    "relative max-w-6xl mx-auto",
                    variantClasses[variant],
                    className
                )}
            >
                {showCorners && (
                    <>
                        <CornerPlus className="-bottom-2 -left-2" />
                        <CornerPlus className="-bottom-2 -right-2" />
                    </>
                )}
                {children}
            </section>
        );
    }
);

Section.displayName = "Section";

export default Section;
