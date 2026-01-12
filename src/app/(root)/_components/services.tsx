"use client";
import React, { useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { CodeXml } from "lucide-react";

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
      className="relative w-96 rounded-3xl border border-neutral-800 bg-neutral-950 p-6"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl"
        animate={controls}
        transition={{ duration: 0.5 }}
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.25), transparent 40%)`,
        }}
      />
      <div className="mb-4">{icon}</div>
      <h3 className="mb-2 font-medium text-neutral-100">{title}</h3>
      <p className="text-sm text-neutral-400">{description}</p>
    </div>
  );
};

const Services = () => {
  const servicesData: CardData[] = [
    {
      title: "Full-Stack Development",
      description: "End-to-end web applications with modern technologies and seamless integration.",
      icon: (
        <CodeXml />
      ),
    },
    {
      title: "Frontend Development",
      description: "Responsive, accessible, and performant user interfaces for all devices.",
      icon: (
        <CodeXml />
      ),
    },
    {
      title: "Security & Performance",
      description: "Optimized applications with security best practices and reliability.",
      icon: (
       <CodeXml />
      ),
    },
  ];

  return (
    <section className="py-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex w-full justify-center gap-2">
          {servicesData.map((service, index) => (
            <SpotlightItem
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;