
"use client";

import React from "react";
import { ShieldAlert, Zap, FileCode, Palette, Database, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

const skillCategories = [
  {
    title: "Cyber Security",
    icon: <ShieldAlert className="h-6 w-6 text-primary" />,
    description: "Testing, digital forensics, monitoring, analysis & DPDP compliance",
    skills: ["Wireshark", "BurpSuite", "Kali Linux", "DES / AES", "Forensics", "Autopsy"],
    color: "green",
  },
  {
    title: "Full-Stack Web",
    icon: <Zap className="h-6 w-6 text-secondary" />,
    description: "End-to-end development with the MERN stack and RESTful APIs",
    skills: ["React", "Node.js", "Express", "MongoDB", "Svelte"],
    color: "blue",
  },
  {
    title: "Languages",
    icon: <FileCode className="h-6 w-6 text-accent" />,
    description: "Proficient across systems, scripting and web languages",
    skills: [ "Java", "JavaScript", "TypeScript", "SQL", "C"],
    color: "orange",
  },
  {
    title: "Frontend",
    icon: <Palette className="h-6 w-6 text-secondary" />,
    description: "Crafting responsive, accessible, and visually sharp UIs",
    skills: ["Tailwind CSS", "Bootstrap", "HTML5", "CSS3"],
    color: "blue",
  },
  {
    title: "Backend & DB",
    icon: <Database className="h-6 w-6 text-primary" />,
    description: "Scalable APIs, Redis queuing and relational/NoSQL databases",
    skills: ["MongoDB", "MySQL", "Redis", "REST API"],
    color: "green",
  },
  {
    title: "Tools & Software",
    icon: <Wrench className="h-6 w-6 text-accent" />,
    description: "Version control, API testing and cloud deployment tools",
    skills: ["Git / GitHub", "Postman", "Vercel", "VS Code", "Docker", "VMware"],
    color: "orange",
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6 sm:px-12 bg-background relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="flex items-center gap-6 mb-20">
          <span className="font-mono text-base text-primary font-bold">02</span>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tighter uppercase text-white">Skills</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/20 to-transparent" />
        </div>

        {/* Skills Grid */}
{/* Skills Grid */}
<div className="relative">

  {/* Rope */}
  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-5">

    {skillCategories.map((cat, idx) => (
      
      <div key={idx} className="relative flex justify-center">

        {/* Thread */}
        <div className="absolute -top-6 w-[2px] h-10 bg-primary/40" />

        {/* Clip */}
        <div className="absolute -top-8 w-6 h-6 bg-primary rounded-sm rotate-45 border border-primary/40 z-10" />

        {/* Hanging Card */}
        <div
          className="group p-5 bg-card border border-border/10 relative overflow-hidden transition-all hover:border-primary/40 rotate-[-2deg] swing"
          style={{
            clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)"
          }}
        >
          {/* Corner Accent */}
          <div className="absolute top-0 right-0 w-5 h-5 bg-primary/20 clip-path-[polygon(100%_0,0_0,100%_100%)] opacity-40" />

          <div className="flex flex-col gap-6">

            {/* Icon */}
            <div className="p-3 w-fit bg-background border border-border/20">
              {cat.icon}
            </div>

            {/* Title */}
            <div>
              <h3 className="text-xl font-bold text-white mb-2">{cat.title}</h3>
              <p className="font-mono text-xs text-muted-foreground leading-relaxed mb-2">
                {cat.description}
              </p>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2.5 mt-auto">
              {cat.skills.map((skill) => (
                <span 
                  key={skill} 
                  className={cn(
                    "px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-widest border transition-all",
                    cat.color === 'green' && "bg-primary/5 text-primary border-primary/20 hover:border-primary/50",
                    cat.color === 'blue' && "bg-secondary/5 text-secondary border-secondary/20 hover:border-secondary/50",
                    cat.color === 'orange' && "bg-accent/5 text-accent border-accent/20 hover:border-accent/50"
                  )}
                >
                  {skill}
                </span>
              ))}
            </div>

          </div>
        </div>
      </div>
    ))}
  </div>
</div>
      </div>
    </section>
  );
};
