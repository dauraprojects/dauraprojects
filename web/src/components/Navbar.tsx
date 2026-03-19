"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.05)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a
          href="#"
          className="font-serif text-md md:text-xl font-light tracking-tight text-foreground"
        >
          D'Aura Project
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          <a
            href="#katalog"
            className="text-[11px] uppercase tracking-[0.2em] font-semibold text-foreground/70 hover:text-foreground transition-colors duration-200"
          >
            Katalog Desain
          </a>
          <a
            href="#fitur"
            className="text-[11px] uppercase tracking-[0.2em] font-semibold text-foreground/70 hover:text-foreground transition-colors duration-200"
          >
            Fitur
          </a>
          <a
            href="#harga"
            className="text-[11px] uppercase tracking-[0.2em] font-semibold text-foreground/70 hover:text-foreground transition-colors duration-200"
          >
            Harga
          </a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#"
            className="text-[11px] uppercase tracking-[0.2em] font-semibold text-foreground/70 hover:text-foreground transition-colors duration-200"
          >
            Masuk
          </a>
          <Button
            variant="hero"
            className="text-[11px] uppercase tracking-[0.2em] font-semibold"
          >
            Mulai Buat
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border/[0.05] px-6 py-8 space-y-6 animate-fade-in-up">
          <a
            href="#katalog"
            className="block text-[11px] uppercase tracking-[0.2em] font-semibold text-foreground/70"
          >
            Katalog Desain
          </a>
          <a
            href="#fitur"
            className="block text-[11px] uppercase tracking-[0.2em] font-semibold text-foreground/70"
          >
            Fitur
          </a>
          <a
            href="#harga"
            className="block text-[11px] uppercase tracking-[0.2em] font-semibold text-foreground/70"
          >
            Harga
          </a>
          <div className="pt-4 border-t border-border/[0.05] space-y-4">
            <a
              href="#"
              className="block text-[11px] uppercase tracking-[0.2em] font-semibold text-foreground/70"
            >
              Masuk
            </a>
            <Button variant="hero" size="default" className="w-full">
              Mulai Buat
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
