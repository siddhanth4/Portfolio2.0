"use client";

import React from "react";
import { Github, Linkedin, Cloud, Instagram } from "lucide-react";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="pt-32 pb-90 px-6 sm:px-12 text-center relative overflow-hidden"
    >
      {/* HEADER */}
      <div className="font-mono text-xs text-primary mb-8 uppercase tracking-[0.4em] font-bold">
        // Let&apos;s Connect
      </div>

      <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 uppercase leading-none">
        Get In{" "}
        <span
          className="text-transparent"
          style={{ WebkitTextStroke: "1px hsl(var(--primary))" }}
        >
          Touch
        </span>
      </h2>
<a
  href="mailto:siddhanthsakhare@gmail.com"
  className="font-mono text-base md:text-lg text-primary mt-2 mb-12 tracking-[0.2em] inline-block hover:text-secondary transition"
>
  siddhanthsakhare@gmail.com
</a>
      {/* ================= COMPASS ================= */}
      <div className="flex justify-center items-center ">
        <div className="relative w-[260px] h-[260px] md:w-[340px] md:h-[340px]">

          {/* GREEN HOLOGRAM GLOW */}
          <div className="absolute inset-0 rounded-full bg-primary/10 blur-[80px]" />

          {/* ROTATING COMPASS */}
          <div className="compass-spin absolute inset-0 flex items-center justify-center">

            <svg viewBox="0 0 200 200" className="w-full h-full">

              {/* OUTER RING */}
              <circle cx="100" cy="100" r="85"
                stroke="rgba(0,255,136,0.7)"
                strokeWidth="2"
                fill="none"
                className="neon-green"
              />

              {/* INNER RING */}
              <circle cx="100" cy="100" r="60"
                stroke="rgba(0,255,136,0.4)"
                strokeWidth="1"
                fill="none"
                className="neon-green"
              />

              {/* TICKS */}
              {[...Array(36)].map((_, i) => {
                const angle = (i * 10 * Math.PI) / 180;
                const x1 = 100 + Math.cos(angle) * 85;
                const y1 = 100 + Math.sin(angle) * 85;
                const x2 = 100 + Math.cos(angle) * 95;
                const y2 = 100 + Math.sin(angle) * 95;

                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="rgba(0,255,136,0.6)"
                    strokeWidth={i % 3 === 0 ? 2 : 1}
                    className="neon-green"
                  />
                );
              })}

              {/* STAR */}
              <polygon
                points="100,20 110,100 100,180 90,100"
                fill="none"
                stroke="rgba(0,255,136,1)"
                strokeWidth="3"
                className="neon-green"
              />

              <polygon
                points="20,100 100,110 180,100 100,90"
                fill="none"
                stroke="rgba(0,255,136,1)"
                strokeWidth="3"
                className="neon-green"
              />

              {/* CENTER */}
              <circle
                cx="100"
                cy="100"
                r="4"
                fill="rgba(0,255,136,1)"
                className="neon-fill-green"
              />
            </svg>

            {/* ================= ICON LINKS ================= */}

            {/* TOP */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8">
              <div className="counter-rotate">
                <a href="https://www.linkedin.com/in/siddhanth-sakhare-159653257/" target="_blank">
                  <Linkedin className="icon-cyber" />
                </a>
              </div>
            </div>

            {/* RIGHT */}
            <div className="absolute right-0 top-1/2 translate-x-8 -translate-y-1/2">
              <div className="counter-rotate">
                <a href="https://github.com/siddhanth4" target="_blank">
                  <Github className="icon-cyber" />
                </a>
              </div>
            </div>

            {/* BOTTOM */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-8">
              <div className="counter-rotate">
                <a href="https://www.instagram.com/siddhanth_s4" target="_blank">
                  <Instagram className="icon-cyber" />
                </a>
              </div>
            </div>

            {/* LEFT */}
            <div className="absolute left-0 top-1/2 -translate-x-8 -translate-y-1/2">
              <div className="counter-rotate">
                <a
                  href="https://www.skills.google/public_profiles/29b3d401-7564-42a8-91fa-9dc9c8876548"
                  target="_blank"
                >
                  <span className="icon-cyber font-black text-3xl leading-none">G </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="pt-5 border-t border-primary/10 mt-20">
        <p className="font-mono text-xs text-muted-foreground uppercase tracking-[0.3em]">
         Designed & Built by <br />
          <span className="text-primary font-bold">
            Siddhanth Sakhare
          </span>
        </p>
      </div>
    </section>
  );
};



