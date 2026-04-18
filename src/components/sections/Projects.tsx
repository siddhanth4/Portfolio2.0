"use client";

import React, { useState } from "react";
import { Github, Sparkles, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateProjectSummary } from "@/ai/flows/project-summary-generator";

const projects = [
    {
    id: "cms",
    name: "Consent Management System",
    description: "DPDP Act-compliant CMS — stores, shares and manages user data on behalf of organizations.",
    tags: ["Cybersec", "React", "Legal", "GRC"],
    link: "https://github.com/siddhanth4/CMS-Form_Builder",
    image: "/cms.png",
  },
    {
    id: "soulpass",
    name: "SoulPass Dashboard",
    description: "Soulbound NFT based credential verification & management dashboard build over Ethereum blockchain over ERC721 standard.",
    tags: ["Blockchain  ", "Group Project", "Security"],
    link: "https://github.com/siddhanth4/SoulPass_Dashboard",
    image: "/soulpass.jpg",
  },
  {
    id: "compiler",
    name: "Online Compiler",
    description: "Browser-based C++ and Python compiler built with React, Node.js and Redis for job processing.",
    tags: ["React", "Node.js", "Redis"],
    link: "https://github.com/siddhanth4/Online_Compiler",
    image: "/compiler.png",
  },
  {
    id: "encryption",
    name: "Encryption-Decryption Tool",
    description: "React web app implementing AES, DES & Blowfish encryption/decryption — clean UI for cryptographic operations.",
    tags: ["Cryptography", "React", "Alogorithms"],
    link: "https://github.com/siddhanth4/Encryption-Decryption-Tool",
    image: "/cryptography.png",
  },
    {
    id: "wanderlust",
    name: "WanderLust",
    description: "Hotel listing platform with CRUD ops and RESTful APIs — full MERN stack with user-driven listings.",
    tags: ["Express", "MongoDB", "React"],
    link: "https://github.com/siddhanth4/wanderlust",
    image: "/wanderlust.png",
  },
  {
    id: "chat",
    name: "Secured Socket Chat",
    description: "Client-server socket communication in Java with Substitution Cipher encryption end-to-end.",
    tags: ["Java", "Socket.io", "Cipher"],
    link: "https://github.com/siddhanth4/Encyrpted_Socket_Chat",
    image: "/chat.jpg",
  },

];

const ProjectCard = ({ project }: { project: any }) => {
  const [aiSummary, setAiSummary] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerateSummary = async () => {
    setLoading(true);
    try {
      const result = await generateProjectSummary({
        projectDescription: project.description,
      });
      setAiSummary(result.summary);
    } catch (error) {
      console.error("Analysis failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="group bg-card border border-secondary/20 overflow-hidden relative transition-all duration-300 hover:border-secondary/60 hover:-translate-y-1">

      {/* IMAGE */}
      <div className="h-48 bg-background relative overflow-hidden">

        <img
          src={project.image}
          alt={project.name}
          className="h-150px w-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
          <Button size="icon" variant="secondary" className="rounded-none h-10 w-10" asChild>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
        </div>

        {/* Bottom Glow Line */}
        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-secondary w-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
      </div>

      {/* CONTENT */}
      <div className="p-8 space-y-6">
        <h3 className="text-xl font-bold tracking-tight uppercase group-hover:text-secondary transition-colors">
          {project.name}
        </h3>

        <p className="font-mono text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        {/* TAGS */}
        <div className="flex flex-wrap gap-2.5">
          {project.tags.map((tag: string) => (
            <span
              key={tag}
              className="px-3 py-1 font-mono text-[10px] uppercase tracking-widest border border-secondary/20 bg-secondary/5 text-secondary font-bold"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* AI SUMMARY */}
        {/* {aiSummary && (
          <div className="p-4 bg-primary/5 border border-primary/10 animate-in fade-in zoom-in duration-300">
            <div className="flex items-center gap-2 text-[10px] font-mono text-primary font-bold mb-2 uppercase tracking-tighter">
              <Sparkles className="h-3 w-3" />
              <span>Security Insight</span>
            </div>
            <p className="text-[11px] font-mono leading-relaxed text-muted-foreground italic">
              {aiSummary}
            </p>
          </div>
        )} */}

        {/* BUTTON */}
        {/* <Button
          variant="ghost"
          size="sm"
          className="w-full rounded-none font-mono text-[10px] uppercase tracking-widest text-primary hover:bg-primary/10 hover:text-primary h-10 font-bold"
          onClick={handleGenerateSummary}
          disabled={loading || !!aiSummary}
        >
          {loading ? (
            <Loader2 className="h-4 w-4 animate-spin mr-2" />
          ) : (
            <Sparkles className="h-4 w-4 mr-2" />
          )}
          {aiSummary ? "Analysis Complete" : "AI Security Audit"}
        </Button> */}
      </div>
    </div>
  );
};

export const Projects = () => {
  return (
    <section id="project" className="py-32 px-6 sm:px-12 bg-card/20">
      <div className="container mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="flex items-center gap-6 mb-20">
          <span className="font-mono text-base text-primary font-bold">04</span>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tighter uppercase">
            Projects
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/20 to-transparent" />
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
};