"use client";

import React, { useEffect, useState, useRef } from "react";

export const About = () => {
  const fullText = `To defend systems, you must think like an attacker—
because security isn’t about blocking threats,
it’s about understanding them.`;

  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // 🔥 visibility trigger
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // =========================
  // Typing Animation
  // =========================
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && index < fullText.length) {
      timeout = setTimeout(() => {
        setTypedText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 25);
    } else if (!isDeleting && index === fullText.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && index > 0) {
      timeout = setTimeout(() => {
        setTypedText((prev) => prev.slice(0, -1));
        setIndex(index - 1);
      }, 15);
    } else if (isDeleting && index === 0) {
      timeout = setTimeout(() => setIsDeleting(false), 500);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  // =========================
  // 🔥 Intersection Observer
  // =========================
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // run once only
        }
      },
      { threshold: 0.35 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 bg-background overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* HEADER */}
        <div className="flex items-center gap-6 mb-16">
          <span className="font-mono text-primary text-sm tracking-widest">
            01
          </span>
          <h2 className="text-4xl sm:text-6xl font-black uppercase text-white">
            ABOUT
          </h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-primary/30 to-transparent" />
        </div>

        {/* MAIN */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* TEXT */}
          <div className="space-y-6 font-mono text-muted-foreground text-sm">
            <p>
              I'm a final-year B.Tech.{" "}
              <span className="text-white font-bold">
                Computer Science & Engineering
              </span>{" "}
              student at{" "}
              <span className="text-primary font-bold">
                GHRCEM, Nagpur
              </span>
              , specializing in{" "}
              <span className="text-secondary font-bold">
                Cyber Security
              </span>.
            </p>

            <p>
              My work bridges building{" "}
              <span className="text-primary font-bold">
                full-stack applications
              </span>{" "}
              with{" "}
              <span className="text-secondary font-bold">
                cyber security & forensics
              </span>.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6">
              {[
                { value: "9.12", label: "CGPA" },
                { value: "4+", label: "PROJECTS" },
                { value: "5+", label: "CERTS" },
                { value: "3+", label: "ROLES" },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="text-2xl font-bold text-primary">
                    {item.value}
                  </div>
                  <div className="text-[10px] uppercase tracking-widest">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* TERMINAL */}
          <div className="border border-primary/20 bg-background/80 backdrop-blur-md">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-primary/20">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 font-mono text-xs">
                root@siddhanth:~
              </span>
            </div>

            <div className="p-6 font-mono text-sm min-h-[220px]">
              <p className="text-primary">root@siddhanth:~$ whoami</p>
              <p className="mt-4 text-white whitespace-pre-line">
                "{typedText}
                <span className="text-primary animate-pulse">█</span>"
              </p>
            </div>
          </div>
        </div>

        {/* BADGES */}
        <div className="mt-10">
          <p className="font-mono text-xs uppercase tracking-[0.4em] mb-10">
            Learning • Challenging • Growing
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
            {[
              { src: "/badges/google.png", name: "Google" },
              { src: "/badges/microsoft.png", name: "Microsoft" },
              { src: "/badges/postman.png", name: "Postman" },
              { src: "/badges/mckinsey2.png", name: "McKinsey" },
              { src: "/badges/docker.png", name: "Docker" },
              { src: "/badges/gsa.jpg", name: "HacktoberFest" },
            ].map((badge, i) => (
              <div key={i} className="group perspective">
                <div
                  className={`relative h-[160px] w-full transition-all duration-700 transform-style
                  ${
                    isVisible
                      ? "opacity-100 translate-y-0 scale-100 blur-0"
                      : "opacity-0 translate-y-12 scale-90 blur-sm"
                  }`}
                  style={{ transitionDelay: `${i * 140}ms` }}
                >
                  {/* Glow pulse */}
                  <div className="absolute inset-0 bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />

                  {/* Card */}
                  <div className="absolute inset-0 border border-primary/20 bg-background/60 backdrop-blur-md flex items-center justify-center p-4
                    group-hover:rotate-y-12 group-hover:-rotate-x-6 transition duration-500">

                    <img
                      src={badge.src}
                      alt={badge.name}
                      className="h-full object-contain transition duration-500 
                      group-hover:scale-110 drop-shadow-[0_0_25px_rgba(0,255,136,0.4)]"
                    />
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
