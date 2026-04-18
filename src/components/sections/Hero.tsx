
"use client";

import React, { useState } from "react";
import { Shield } from "lucide-react";

export const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full items-center justify-center pt-24 md:pt-32 pb-12 md:pb-16 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 cyber-grid" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-primary/5 rounded-full blur-[80px] -z-10" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-center">

          {/* LEFT SIDE */}
          <div className="flex flex-col gap-6 md:gap-8 animate-in fade-in slide-in-from-left duration-1000 text-center lg:text-left">

            {/* Top Badge */}
            <div className="
              flex items-center justify-center lg:justify-start gap-2 md:gap-3
              font-mono text-[10px] sm:text-xs md:text-sm
              text-primary
              border border-primary/20
              bg-primary/5
              w-fit px-3 sm:px-4 md:px-6 py-2 md:py-3
              uppercase tracking-[0.2em] md:tracking-[0.25em]
              font-bold
              mx-auto lg:mx-0
            ">
              <Shield className="h-4 w-4 md:h-5 md:w-5 shrink-0" />
              <span className="whitespace-normal sm:whitespace-nowrap">
                CYBERSECURITY · FULL STACK · FORENSICS · RESEARCH
              </span>
            </div>

            {/* Name */}
            <div className="space-y-3 md:space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black leading-[0.9] tracking-tighter uppercase">
                <span className="text-white block">Siddhanth</span>
                <span className="text-white block">Sakhare</span>
              </h1>

              {/* Roles */}
              <div className="pt-3 md:pt-4 space-y-2 md:space-y-4">
                <div
                  className="text-transparent uppercase tracking-[0.25em] md:tracking-[0.4em] font-bold leading-none"
                  style={{
                    WebkitTextStroke: "1px hsl(var(--secondary))",
                    fontSize: "clamp(0.9rem, 3vw, 1.6rem)"
                  }}
                >
                  <span>
  MERN Stack <br className="hidden md:block" /> Developer &
</span>
                </div>
                <div
                  className="text-transparent uppercase tracking-[0.25em] md:tracking-[0.4em] font-bold leading-none"
                  style={{
                    WebkitTextStroke: "1px hsl(var(--secondary))",
                    fontSize: "clamp(0.9rem, 3vw, 1.6rem)"
                  }}
                >
                  Cyber Security Enthusiast
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="font-mono text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
              Engineering against{" "}
              <span className="text-primary font-bold">cyber threats</span> & building{" "}
              <span className="text-secondary font-bold">secure web apps</span>.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex justify-center lg:justify-end items-end w-full mt-10 lg:mt-0">

            {/* Glow */}
            <div className="absolute right-1/2 lg:right-0 translate-x-1/2 lg:translate-x-0 w-[260px] sm:w-[320px] md:w-[400px] h-[260px] sm:h-[320px] md:h-[400px] bg-primary/10 blur-[100px] md:blur-[120px] rounded-full" />

            {/* Image Wrapper */}
            <div className="relative translate-x-0">
              
              <div className="relative w-[220px] sm:w-[260px] md:w-[320px] lg:w-[380px]">

                {/* GLITCH CONTAINER */}
                <div className="relative glitch-container animate-float">

                  {/* BASE */}
                  <img
                    src="/boy2.png"
                    alt="Developer"
                    className="relative z-50 object-contain rounded-[200px] w-full"
                  />

                  {/* RED */}
                  <img
                    src="/boy2.png"
                    alt=""
                    className="absolute inset-1 object-contain rounded-[200px] w-full opacity-70 mix-blend-screen glitch-red"
                  />

                  {/* BLUE */}
                  <img
                    src="/boy2.png"
                    alt=""
                    className="absolute inset-1 object-contain rounded-[200px] w-full opacity-70 mix-blend-screen glitch-blue"
                  />

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

