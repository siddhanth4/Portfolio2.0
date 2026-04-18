"use client";

import React from "react";

export const Footer = () => {
  return (
    <footer className="py-8 px-6 text-center border-t border-primary/5 bg-background">
      <p className="font-mono text-[8px] uppercase tracking-[0.4em] text-muted-foreground opacity-50">
        CipherFolio // All Systems Operational // {new Date().getFullYear()}
      </p>
    </footer>
  );
};