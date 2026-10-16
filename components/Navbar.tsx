"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
  id: string;
  number: string;
  activeColor: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about", id: "about", number: "01", activeColor: "bg-cyan-300" },
  { label: "Experience", href: "#experience", id: "experience", number: "02", activeColor: "bg-purple-300" },
  { label: "Skills", href: "#skills", id: "skills", number: "03", activeColor: "bg-yellow-300" },
  { label: "Projects", href: "#projects", id: "projects", number: "04", activeColor: "bg-emerald-300" },
  { label: "Stats", href: "#coding-stats", id: "coding-stats", number: "05", activeColor: "bg-orange-300" },
  { label: "Contact", href: "#contact", id: "contact", number: "06", activeColor: "bg-blue-300" },
];

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const lastScrollYRef = useRef(0);
  const mobileMenuOpenRef = useRef(false);
  mobileMenuOpenRef.current = mobileMenuOpen;

  // Scroll listener for auto-hide, progress bar & scroll-spy
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const lastScrollY = lastScrollYRef.current;

          // 1. Auto-hide when scrolling down, show when scrolling up (keep visible if mobile drawer is open)
          if (mobileMenuOpenRef.current || currentScrollY <= 20) {
            setIsVisible(true);
          } else if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 8) {
            setIsVisible(false);
          } else if (lastScrollY - currentScrollY > 8) {
            setIsVisible(true);
          }
          lastScrollYRef.current = currentScrollY;

          // 2. Reading scroll progress percentage
          const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
          const progress = maxScroll > 0 ? (currentScrollY / maxScroll) * 100 : 0;
          setScrollProgress(Math.min(100, Math.max(0, progress)));

          // 3. Section Scroll-Spy
          const navOffset = 180;
          let current = "";
          for (const item of NAV_ITEMS) {
            const el = document.getElementById(item.id);
            if (el) {
              const top = el.offsetTop - navOffset;
              const height = el.offsetHeight;
              if (currentScrollY >= top && currentScrollY < top + height) {
                current = item.id;
              }
            }
          }
          setActiveSection(current);

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Smooth scroll handler with offset for sticky navbar
  const scrollToSection = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (href.startsWith("#")) {
        const targetId = href.substring(1);
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          e.preventDefault();
          const navHeight = 76;
          const targetY = targetEl.getBoundingClientRect().top + window.scrollY - navHeight;
          window.scrollTo({ top: targetY, behavior: "smooth" });
          setActiveSection(targetId);
          setMobileMenuOpen(false);
        }
      }
    },
    []
  );

  return (
    <>
      <nav
        className={`w-full bg-[#FFFDEE]/95 backdrop-blur-md border-b-4 border-black fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out shadow-[0px_4px_0px_0px_rgba(0,0,0,1)] ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
        aria-label="Main Navigation"
      >
        {/* Scroll Progress Bar across bottom border */}
        <div
          className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-cyan-400 via-yellow-400 to-emerald-400 transition-[width] duration-100 ease-out z-20 pointer-events-none"
          style={{ width: `${scrollProgress}%` }}
          aria-hidden="true"
        />

        <div className="w-full py-2.5 sm:py-3 px-3 sm:px-6 md:px-6 lg:px-12 flex items-center justify-between">
          
          {/* Brand Logo & GitHub Link */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/"
              className="group font-mono font-black text-lg sm:text-xl lg:text-2xl text-black uppercase tracking-tight flex items-center gap-1.5 transition-transform hover:-translate-y-0.5"
            >
              <span>Chaitanya</span>
              <span className="text-[10px] md:text-xs bg-yellow-300 text-black px-1.5 py-0.5 border-2 border-black font-mono font-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] -rotate-3 group-hover:rotate-0 transition-transform">
                DEV
              </span>
            </Link>

            {/* GitHub Quick Link */}
            <a
              href="https://github.com/selotechaitanya-svg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              title="GitHub Profile"
              className="bg-blue-300 hover:bg-blue-400 text-black border-2 border-black p-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center justify-center cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          </div>

          {/* Desktop & Tablet Navigation Links with Scroll-Spy Highlight */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2.5 bg-black/5 p-1 rounded-sm border-2 border-black/15">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`relative font-mono font-bold text-[11px] lg:text-sm uppercase px-2 lg:px-3 py-1.5 border-2 transition-all cursor-pointer ${
                    isActive
                      ? `${item.activeColor} text-black border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] -translate-y-0.5 font-black`
                      : "text-black border-transparent hover:border-black hover:bg-[#FFFBEF] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-black border border-white" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Desktop & Tablet CTA & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* "Let's Talk" CTA Button */}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="bg-emerald-300 hover:bg-emerald-400 text-black border-2 border-black font-black uppercase text-xs lg:text-sm px-2.5 sm:px-3.5 md:px-3 lg:px-5 py-1.5 sm:py-2 shadow-[2.5px_2.5px_0px_0px_rgba(0,0,0,1)] sm:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all flex items-center gap-1 sm:gap-1.5 group cursor-pointer"
            >
              <span>Let&apos;s Talk</span>
              <span className="inline-block transform group-hover:translate-x-1 transition-transform">→</span>
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              className="md:hidden bg-yellow-300 border-2 border-black p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none flex flex-col justify-center items-center w-9 h-9 gap-1 cursor-pointer"
            >
              <span
                className={`w-5 h-0.5 bg-black transition-transform duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-black transition-opacity duration-300 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-black transition-transform duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Drawer Backdrop */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="md:hidden fixed inset-0 top-[58px] sm:top-[65px] bg-black/50 backdrop-blur-sm z-40 transition-opacity"
          aria-hidden="true"
        />
      )}

      {/* Mobile Navigation Drawer */}
      <div
        className={`md:hidden fixed top-[58px] sm:top-[65px] left-0 right-0 max-h-[calc(100vh-65px)] overflow-y-auto bg-[#FFFDEE] border-b-4 border-black shadow-[0_8px_0px_0px_rgba(0,0,0,1)] z-50 p-5 sm:p-6 flex flex-col gap-3 transition-all duration-300 ease-out origin-top ${
          mobileMenuOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-8 opacity-0 pointer-events-none"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="flex items-center justify-between pb-2 border-b-2 border-black">
          <span className="font-mono text-xs font-black uppercase text-gray-700 tracking-wider">
            Navigation
          </span>
          <span className="text-[10px] bg-yellow-300 text-black px-2 py-0.5 border-2 border-black font-mono font-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] uppercase">
            Menu
          </span>
        </div>

        <div className="flex flex-col gap-2.5 my-1">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`flex items-center justify-between border-2 border-black px-4 py-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none font-mono font-black uppercase text-sm transition-all cursor-pointer ${
                  isActive ? `${item.activeColor} -translate-y-0.5` : "bg-white hover:bg-yellow-100"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs text-gray-500 font-bold">{item.number}</span>
                  <span>{item.label}</span>
                </div>
                <span className="text-base font-bold">→</span>
              </a>
            );
          })}
        </div>

        <div className="pt-2 border-t-2 border-black flex items-center justify-between gap-3">
          <a
            href="https://github.com/selotechaitanya-svg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-blue-300 text-black border-2 border-black py-2.5 font-mono font-black uppercase text-xs text-center shadow-[2.5px_2.5px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
          >
            GitHub Profile
          </a>
        </div>
      </div>
    </>
  );
}

