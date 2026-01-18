"use client";
import React, { useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { CodeXml } from "lucide-react";
import { servicesData } from "@/lib/data/services";

interface CardData {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const SpotlightItem: React.FC<CardData> = ({ title, description, icon }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => controls.start({ opacity: 1 });
  const handleMouseLeave = () => controls.start({ opacity: 0 });

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full sm:w-80 md:w-96 lg:w-[32%] rounded-2xl border border-foreground/10 bg-zinc-50 dark:bg-zinc-900 overflow-hidden flex flex-col"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl"
        animate={controls}
        transition={{ duration: 0.5 }}
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, var(--spotlight-color), transparent 40%)`,
        }}
      />

      <div className="p-6 pb-4">
        <div className="mb-4 text-foreground/80">{icon}</div>
      </div>

      <div className="bg-white dark:bg-zinc-950 rounded-t-3xl p-6 pt-5 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] flex-1">
        <h3 className="mb-2 font-medium text-base text-foreground tracking-tight">{title}</h3>
        <p className="text-sm text-foreground/50 leading-relaxed font-medium">{description}</p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto">
        <div className="flex w-full flex-wrap justify-center gap-4">
          {servicesData.map((service, index) => (
            <SpotlightItem
              key={index}
              title={service.title}
              description={service.description}
              icon={<CodeXml />}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
