"use client";

import React, { useState } from "react";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: "cms",
    name: "Consent Management System",
    description:
      "DPDP Act-compliant CMS — stores, shares and manages user data on behalf of organizations.",
    tags: ["Cybersec", "React", "Legal", "GRC"],
    link: "https://github.com/siddhanth4/CMS-Form_Builder",
    image: "/cms2.png",
  },
  {
    id: "soulpass",
    name: "SoulPass Dashboard",
    description:
      "Soulbound NFT based credential verification & management dashboard build over Ethereum blockchain over ERC721 standard.",
    tags: ["Blockchain", "Group Project", "Security"],
    link: "https://github.com/siddhanth4/SoulPass_Dashboard",
    image: "/soulpass.jpg",
  },
  {
    id: "compiler",
    name: "Online Compiler",
    description:
      "Browser-based C++ and Python compiler built with React, Node.js and Redis for job processing.",
    tags: ["React", "Node.js", "Redis"],
    link: "https://github.com/siddhanth4/Online_Compiler",
    image: "/compiler.png",
  },
  {
    id: "encryption",
    name: "Encryption-Decryption Tool",
    description:
      "React web app implementing AES, DES & Blowfish encryption/decryption — clean UI for cryptographic operations.",
    tags: ["Cryptography", "React", "Algorithms"],
    link: "https://github.com/siddhanth4/Encryption-Decryption-Tool",
    image: "/cryptography.png",
  },
  {
    id: "wanderlust",
    name: "WanderLust",
    description:
      "Hotel listing platform with CRUD ops and RESTful APIs — full MERN stack with user-driven listings.",
    tags: ["Express", "MongoDB", "React"],
    link: "https://github.com/siddhanth4/wanderlust",
    image: "/wanderlust.png",
  },
  {
    id: "chat",
    name: "Secured Socket Chat",
    description:
      "Client-server socket communication in Java with Substitution Cipher encryption end-to-end.",
    tags: ["Java", "Socket.io", "Cipher"],
    link: "https://github.com/siddhanth4/Encyrpted_Socket_Chat",
    image: "/chat.jpg",
  },
];

const ProjectCard = ({ project }: { project: any }) => {
  return (
    <div className="group bg-card border border-secondary/20 overflow-hidden relative transition-all duration-300 hover:border-secondary/60 hover:-translate-y-1">

      <div className="h-48 bg-background relative overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        <div className="absolute inset-0 bg-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Button size="icon" variant="secondary" asChild>
            <a href={project.link} target="_blank">
              <Github className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-lg font-bold uppercase">{project.name}</h3>
        <p className="text-sm text-muted-foreground">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag: string) => (
            <span
              key={tag}
              className="px-2 py-1 text-[10px] border border-secondary/20 text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ===================== */
/* 🔬 NEW RESEARCH CARD  */
/* ===================== */
const ResearchCard = () => {
  return (
    <div className="mt-10 border border-primary/20 bg-card p-10 md:p-10 relative">

      {/* TOP ACCENT LINE */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />

      {/* MAIN TITLE */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wider">
          Research Work
        </h2>
        <div className="mt-5 h-px w-24 mx-auto bg-gradient-to-r from-primary to-secondary" />
        <p className="mt-5 text-xs font-mono text-muted-foreground uppercase tracking-widest">
          Research Interests: Cyber security · Digital Forensics · Block chain · Web Application Security · AI-ML
        </p>

      </div>

      {/* ===================== */}
      {/* 🧠 SOULPASS (THESIS) */}
      {/* ===================== */}
      <div className="border border-secondary/20 bg-card p-8 md:p-10 mb-5">

        <div className="grid md:grid-cols-3 gap-10">

          {/* LEFT */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold uppercase mb-4">
              SoulPass – Soulbound NFT Certification System
            </h3>

            <p className="text-xs font-mono text-secondary mb-4 uppercase tracking-widest">
              Undergraduate Thesis • ResearchGate Preprint (DOI:
              10.13140/RG.2.2.18443.96803)
            </p>

            <p className="text-sm text-primary font-mono mb-6">
              Supervisor: Prof. Shalini Kumari
            </p>

            <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <li>
                • Proposed a blockchain-based academic credential verification system using Soulbound NFTs to prevent certificate fraud.
              </li>
              <li>
                • Implemented an Ethereum testnet–based system using a customized ERC-721 smart contract adapted for non-transferable credentials.
              </li>
              <li>
                • Designed a secure verification model eliminating third-party dependency and enabling lifelong credential ownership.
              </li>
            </ul>
          </div>

          {/* RIGHT (ORIGINAL ABSTRACT — UNCHANGED) */}
          <div className="border border-secondary/20 bg-secondary/5 p-5 h-fit">
            <h4 className="text-xs font-mono text-primary font-bold mb-2 uppercase tracking-widest">
              Abstract
            </h4>

            <p className="text-xs font-mono text-muted-foreground leading-relaxed">
              Traditional certification systems face credential forgery, record loss, and inefficient verification. SoulPass
              resolves this using Soulbound Tokens (SBTs) — non-transferable, blockchain-bound digital credentials — with smart
              contracts automating issuance and verification, eliminating third-party intermediaries and providing individuals a
              lifelong, universally verifiable credential portfolio.
            </p>
          </div>

        </div>
      </div>

      {/* ===================== */}
{/* 🤖 VR RESEARCH */}
{/* ===================== */}
<div className="border border-secondary/20 bg-card p-8 md:p-10">

  <div className="grid md:grid-cols-3 gap-10">

    {/* LEFT CONTENT */}
    <div className="md:col-span-2">

      <h3 className="text-xl md:text-2xl font-bold uppercase mb-3">
        Improving Virtual Reality using AI & Multilayer Perceptron
      </h3>

      <p className="text-xs font-mono text-secondary mb-4 uppercase tracking-widest">
        Academic Research Study 
      </p>

      <p className="text-sm text-primary font-mono mb-6">
        Supervisor: Asst. Prof. Monika Lambsonge
      </p>

      <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
        <li>
          • Explored MLP-based models to enhance VR interaction, immersion, and user behaviour prediction.
        </li>
        <li>
          • Studied Multilayer Perceptron for object recognition integrated with real-time environments.
        </li>
        <li>
          • Researched AI-driven VR systems for simulation and training, focusing on adaptive and personalized user experience.
        </li>
      </ul>

    </div>

    {/* RIGHT ABSTRACT CARD */}
    <div className="border border-secondary/20 bg-secondary/5 p-5 h-fit">

      <h4 className="text-xs font-mono text-primary font-bold mb-2 uppercase tracking-widest">
        Abstract
      </h4>

      <p className="text-xs font-mono text-muted-foreground leading-relaxed">
        Virtual Reality (VR) systems often lack adaptive interaction and realistic immersion. This study explores the use of Artificial Intelligence, specifically Multilayer Perceptron (MLP) models, to enhance user behavior prediction, object recognition, and real-time interaction in VR environments. By integrating MLP-based learning, the system enables personalized and dynamic experiences, improving efficiency and immersion, particularly in simulation and training applications.
      </p>

    </div>

  </div>
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
          <h2 className="text-4xl sm:text-6xl font-black uppercase">
            Projects
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/20 to-transparent" />
        </div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* 🔬 RESEARCH SECTION */}
        <ResearchCard />

      </div>
    </section>
  );
};