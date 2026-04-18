"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const certificates = [
  { title: "Ethical Hacking Essentials", image: "/certificates/ehe.jpg" },
  { title: "Postman Student Expert", image: "/certificates/postman.jpg" },
  { title: "Agile Project Management", image: "/certificates/hp.jpg" },
  { title: "Building LLM with Prompts", image: "/certificates/nvidia.jpg" },
  { title: "TCS", image: "/certificates/tcs.jpg" },
  { title: "IMUN Conference", image: "/certificates/cefimun.jpg" },
];

export const Achievements = () => {
  const [active, setActive] = useState(0);

  const startX = useRef(0);
  const currentX = useRef(0);
  const isDragging = useRef(false);

  const total = certificates.length;
  const threshold = 60;

  const getOffset = (i: number) => {
    let diff = i - active;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  const handleStart = (x: number) => {
    startX.current = x;
    isDragging.current = true;
  };

  const handleMove = (x: number) => {
    if (!isDragging.current) return;
    currentX.current = x;
  };

  const handleEnd = () => {
    if (!isDragging.current) return;

    const diff = currentX.current - startX.current;

    if (diff > threshold) prev();
    else if (diff < -threshold) next();

    isDragging.current = false;
  };

  const next = () => setActive((prev) => (prev + 1) % total);
  const prev = () => setActive((prev) => (prev - 1 + total) % total);

  return (
    <section
      id="achievements"
      className="py-24 sm:py-32 px-4 sm:px-12 bg-background overflow-hidden scroll-mt-5 "
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex items-center gap-4 sm:gap-6 mb-12 sm:mb-10">
          <span className="font-mono text-primary font-bold">05</span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white leading-tight">
  Achievements
</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/20 to-transparent" />
        </div>

        {/* MAIN */}
        <div className="relative">

          {/* LEFT BUTTON */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 border border-primary/40 bg-background/80 backdrop-blur hover:bg-primary/10"
          >
            <ChevronLeft className="text-primary" />
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 border border-primary/40 bg-background/80 backdrop-blur hover:bg-primary/10"
          >
            <ChevronRight className="text-primary" />
          </button>

          {/* STACK */}
          <div
            className="relative h-[380px] sm:h-[480px] flex items-center justify-center perspective select-none cursor-grab active:cursor-grabbing"
            onMouseDown={(e) => handleStart(e.clientX)}
            onMouseMove={(e) => handleMove(e.clientX)}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
            onTouchStart={(e) => handleStart(e.touches[0].clientX)}
            onTouchMove={(e) => handleMove(e.touches[0].clientX)}
            onTouchEnd={handleEnd}
          >
            {certificates.map((cert, i) => {
              const offset = getOffset(i);

              return (
                <div
                  key={i}
                  className="absolute transition-all duration-700"
                  style={{
                    transform: `
                      translateX(${offset * (typeof window !== "undefined" && window.innerWidth < 640 ? 90 : 180)}px)
                      scale(${offset === 0 ? 1 : 0.75})
                      rotateY(${offset * -20}deg)
                      translateZ(${offset === 0 ? 120 : -100}px)
                    `,
                    zIndex: 100 - Math.abs(offset),
                    opacity: Math.abs(offset) > 2 ? 0 : 1,
                  }}
                >
                  <div className="
                    w-[90vw] sm:w-[420px] lg:w-[520px]
                    h-[260px] sm:h-[320px] lg:h-[360px]
                    bg-background border border-primary/30
                    backdrop-blur-md
                    shadow-[0_0_30px_rgba(0,255,136,0.2)]
                  ">

                    {/* HEADER */}
                    <div className="flex items-center gap-2 px-3 sm:px-4 py-2 border-b border-primary/20">
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full" />
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-500 rounded-full" />
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full" />
                      <span className="ml-2 sm:ml-4 font-mono text-[10px] sm:text-xs text-muted-foreground">
                        root@certificates:~
                      </span>
                    </div>

                    {/* IMAGE */}
                    <div className="relative w-full h-[200px] sm:h-[260px] lg:h-[290px]">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        className="object-contain p-2"
                      />
                    </div>

                    {/* FOOTER */}
                    <div className="px-2 sm:px-4 py-2 font-mono text-xs text-primary border-t border-primary/20 flex justify-between">
                      <span className="text-muted-foreground">
                        viewing_certificate
                      </span>
                      <span className="font-bold">
                        {active + 1}/{certificates.length}
                      </span>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};