"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { id: "about", title: "about" },
  { id: "skills", title: "skills" },
  { id: "work", title: "experience" },
  { id: "project", title: "projects" },
  { id: "achievements", title: "achievements" },
  { id: "contact", title: "contact" },
];

export const Navigation = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 flex w-full items-center h-24 transition-all duration-300 px-6 sm:px-12",
        scrolled ? "bg-background/90 backdrop-blur-xl border-b border-primary/20" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 group"
          onClick={() => window.scrollTo(0, 0)}
        >
          <div className="font-mono text-xl tracking-widest font-bold text-primary">
            S<span className="text-secondary">K</span>S<span className="text-muted-foreground">_</span>
          </div>
        </Link>

        <ul className="hidden list-none flex-row gap-12 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={cn(
                  "font-mono text-sm uppercase tracking-[0.25em] transition-all hover:text-secondary hover:neon-glow-secondary",
                  active === link.title ? "text-secondary" : "text-muted-foreground"
                )}
                onClick={() => setActive(link.title)}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-8">
          <div className="hidden sm:flex items-center gap-3 px-6 py-2 border border-primary/20 bg-primary/5">
            <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-[11px] text-primary tracking-[0.25em] uppercase font-bold">Open to Work</span>
          </div>

          <button 
            className="lg:hidden p-2 text-secondary"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-x-0 top-24 bg-background/95 backdrop-blur-2xl border-b border-secondary/20 p-10 lg:hidden transition-all duration-300",
            toggle ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          )}
        >
          <ul className="flex flex-col gap-10">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="font-mono text-base uppercase tracking-[0.3em] text-foreground hover:text-secondary block"
                  onClick={() => setToggle(false)}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};