
"use client";

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const experiences = [
  {
    title: "Jr. Cyber Forensic Intern",
    company: "CRYPTO FORENSIC TECHNOLOGY",
    date: "DEC 2025 - ONGOING",
    points: [
      "Building Consent Management System for DPDP Act compliance.",
      "Investigation and case studies of modern cyber crimes.",
      "Developing hands-on Digital Forensics practical modules.",
    ],
    active: true,
  },
  {
    title: "Google Student Ambassador",
    company: "GHRCEM, NAGPUR",
    date: "JULY 2025 - DEC 2025",
    points: [
      "Promoting Google AI tools like Gemini to student developers.",
      "Organized 2-day International Cyber Summit.",
      "Facilitated workshops on google gemini adoption.",
    ],
  },
  {
    title: "Public Relation Coordinator",
    company: "GeeksforGeeks Student Chapter",
    date: "SEPT 2024 - JUNE 2025",
    points: [
      "Enhancing the student chapter’s visibility and engagement within the college community.",
      "Built and maintained relationships with industry professionals to facilitate guest lectures",
    ],
  },
  {
    title: "Project Mentor",
    company: "GIRLSCRIPT FOUNDATION (GSSOC)",
    date: "OCT 2024 - NOV 2024",
    points: [
      "Reviewed and provided constructive feedback on code submissions to enhance project quality.",
      "Resolved technical roadblocks for community participants.",
      "Guided 2 projects:Clubverse & OTPLogin Frontend authentication using fastapi . ",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company: "IEEE BOMBAY SECTION",
    date: "SEPT 2023 - OCT 2023",
    points: [
      "Developed a student loan calculator modules using SvelteKit.",
      "Engaged in professional code reviews and peer programming.",
      "Collaborated with a team to design and implement different types of calculators.",
    ],
  },
];

export const Experience = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 450;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    
    <section id="work" className="py-32 px-6 sm:px-12 bg-background relative overflow-hidden">
      
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center gap-6 mb-1">
          <span className="font-mono text-base text-primary font-bold">03</span>
<h2 className="text-2xl sm:text-4xl md:text-6xl font-black tracking-tighter uppercase text-white leading-tight">
  Professional Journey
</h2>          <div className="flex-1 h-px bg-gradient-to-r from-secondary/20 to-transparent" />
        </div>

        <div className="relative">
          {/* Navigation Arrows positioned at the ends of the line */}
          <div className="absolute left-0 top-[4.5rem] -translate-y-1/2 -translate-x-1/2 z-20">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              className="rounded-none border-primary/40 hover:border-primary text-primary bg-background shadow-[0_0_15px_rgba(0,255,136,0.2)] w-12 h-12"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>
          
          <div className="absolute right-0 top-[4.5rem] -translate-y-1/2 translate-x-1/2 z-20">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              className="rounded-none border-primary/40 hover:border-primary text-primary bg-background shadow-[0_0_15px_rgba(0,255,136,0.2)] w-12 h-12"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Horizontal scroll container */}
          <div className="relative px-4">
            {/* Timeline track line */}
            <div className="absolute top-[5.2rem] left-0 right-0 h-[2px] bg-gradient-to-r from-primary/40 via-primary/20 to-transparent z-0" />

            <div 
              ref={scrollRef}
              className="flex gap-16 md:gap-240 overflow-x-auto no-scrollbar pb-16 snap-x snap-mandatory pt-4"
            >
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative min-w-[320px] md:min-w-[450px] pt-32 group snap-start">
                  {/* Timeline Dot */}
                  <div className={cn(
                    "absolute top-[4.25rem] left-0 w-4 h-4 rounded-none border-2 z-10 transition-all duration-300",
                    exp.active 
                      ? "bg-primary border-primary scale-125 shadow-[0_0_20px_hsl(var(--primary))]" 
                      : "bg-background border-primary/60 group-hover:border-primary group-hover:bg-primary/20"
                  )} 
                  style={{ transform: 'translateY(-50%) rotate(45deg)' }}
                  />

                  <div className="space-y-6 border-l border-primary/10 pl-8 group-hover:border-primary/30 transition-colors">
                    <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-primary block">{exp.date}</span>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white leading-tight font-headline uppercase">{exp.title}</h3>
                    <div className="font-mono text-sm text-secondary font-bold tracking-[0.2em] uppercase">{exp.company}</div>
                    <ul className="mt-8 space-y-4">
                      {exp.points.map((point, i) => (
                        <li key={i} className="font-mono text-sm text-muted-foreground flex items-start gap-4 leading-relaxed group-hover:text-foreground transition-colors">
                          <span className="text-primary mt-1 font-bold text-lg">›</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
              {/* Extra spacing at the end */}
              <div className="min-w-[150px] md:min-w-[300px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
