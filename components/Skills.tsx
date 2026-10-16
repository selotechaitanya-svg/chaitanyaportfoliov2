"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

const floatAnimations = [
  "gentleFloat1 5.2s ease-in-out infinite",
  "gentleFloat2 6.0s ease-in-out infinite",
  "gentleFloat3 4.8s ease-in-out infinite",
  "gentleFloat1 5.5s ease-in-out infinite",
  "gentleFloat2 4.5s ease-in-out infinite",
  "gentleFloat3 5.8s ease-in-out infinite",
];

interface SkillItem {
  name: string;
  finalTop: string;
  finalLeft: string;
  tabletTop: string;
  tabletLeft: string;
  mobileTop: string;
  mobileLeft: string;
  size: number;
  bg: string;
  delay: number;
}

const skills: SkillItem[] = [
  // --- Column 1 / Row 1 ---
  {
    name: "React",
    finalTop: "2%", finalLeft: "8%",
    tabletTop: "2%", tabletLeft: "6%",
    mobileTop: "1%", mobileLeft: "4%",
    size: 145, bg: "bg-cyan-300", delay: 400
  },
  {
    name: "Design",
    finalTop: "3%", finalLeft: "20%",
    tabletTop: "2%", tabletLeft: "22%",
    mobileTop: "14%", mobileLeft: "3%",
    size: 75, bg: "bg-indigo-200", delay: 800
  },
  {
    name: "TypeScript",
    finalTop: "0%", finalLeft: "52%",
    tabletTop: "16%", tabletLeft: "6%",
    mobileTop: "25%", mobileLeft: "3%",
    size: 85, bg: "bg-blue-300", delay: 500
  },
  {
    name: "CSS",
    finalTop: "32%", finalLeft: "12%",
    tabletTop: "30%", tabletLeft: "8%",
    mobileTop: "36%", mobileLeft: "3%",
    size: 85, bg: "bg-sky-300", delay: 900
  },
  {
    name: "Python",
    finalTop: "28%", finalLeft: "28%",
    tabletTop: "43%", tabletLeft: "12%",
    mobileTop: "47%", mobileLeft: "8%",
    size: 80, bg: "bg-yellow-200", delay: 1200
  },

  // --- Column 2 / Row 2 ---
  {
    name: "Figma",
    finalTop: "0%", finalLeft: "34%",
    tabletTop: "1%", tabletLeft: "38%",
    mobileTop: "0%", mobileLeft: "38%",
    size: 135, bg: "bg-purple-300", delay: 700
  },
  {
    name: "UI/UX",
    finalTop: "18%", finalLeft: "2%",
    tabletTop: "16%", tabletLeft: "22%",
    mobileTop: "12%", mobileLeft: "26%",
    size: 110, bg: "bg-pink-300", delay: 1000
  },
  {
    name: "JavaScript",
    finalTop: "20%", finalLeft: "72%",
    tabletTop: "30%", tabletLeft: "24%",
    mobileTop: "23%", mobileLeft: "26%",
    size: 115, bg: "bg-yellow-300", delay: 850
  },
  {
    name: "Node.js",
    finalTop: "24%", finalLeft: "42%",
    tabletTop: "43%", tabletLeft: "28%",
    mobileTop: "34%", mobileLeft: "26%",
    size: 110, bg: "bg-emerald-300", delay: 1150
  },
  {
    name: "Agile",
    finalTop: "40%", finalLeft: "52%",
    tabletTop: "44%", tabletLeft: "45%",
    mobileTop: "45%", mobileLeft: "38%",
    size: 78, bg: "bg-emerald-200", delay: 1350
  },

  // --- Column 3 / Row 3 ---
  {
    name: "Wireframes",
    finalTop: "15%", finalLeft: "22%",
    tabletTop: "2%", tabletLeft: "54%",
    mobileTop: "12%", mobileLeft: "52%",
    size: 100, bg: "bg-amber-200", delay: 1300
  },
  {
    name: "Tailwind",
    finalTop: "12%", finalLeft: "50%",
    tabletTop: "16%", tabletLeft: "38%",
    mobileTop: "23%", mobileLeft: "52%",
    size: 80, bg: "bg-sky-200", delay: 750
  },
  {
    name: "Systems",
    finalTop: "38%", finalLeft: "35%",
    tabletTop: "30%", tabletLeft: "40%",
    mobileTop: "34%", mobileLeft: "52%",
    size: 85, bg: "bg-cyan-200", delay: 1050
  },
  {
    name: "Next.js",
    finalTop: "4%", finalLeft: "60%",
    tabletTop: "2%", tabletLeft: "70%",
    mobileTop: "1%", mobileLeft: "73%",
    size: 140, bg: "bg-gray-200", delay: 550
  },

  // --- Column 4 / Row 4 ---
  {
    name: "HTML",
    finalTop: "5%", finalLeft: "82%",
    tabletTop: "2%", tabletLeft: "88%",
    mobileTop: "13%", mobileLeft: "77%",
    size: 90, bg: "bg-orange-300", delay: 600
  },
  {
    name: "Prototype",
    finalTop: "22%", finalLeft: "88%",
    tabletTop: "16%", tabletLeft: "54%",
    mobileTop: "24%", mobileLeft: "76%",
    size: 82, bg: "bg-pink-200", delay: 1250
  },
  {
    name: "Git",
    finalTop: "35%", finalLeft: "82%",
    tabletTop: "30%", tabletLeft: "58%",
    mobileTop: "35%", mobileLeft: "76%",
    size: 85, bg: "bg-red-300", delay: 1400
  },
  {
    name: "MongoDB",
    finalTop: "30%", finalLeft: "62%",
    tabletTop: "43%", tabletLeft: "64%",
    mobileTop: "46%", mobileLeft: "68%",
    size: 85, bg: "bg-green-300", delay: 1100
  },
];

const sparklesData = [
  { top: "8%",   left: "12%",  size: 24, color: "text-yellow-400", delay: "0s",   duration: "6s"   },
  { top: "25%",  left: "78%",  size: 32, color: "text-blue-400",   delay: "1.5s", duration: "7.5s" },
  { top: "45%",  left: "5%",   size: 18, color: "text-cyan-400",   delay: "0.5s", duration: "5s"   },
  { top: "58%",  left: "88%",  size: 28, color: "text-yellow-300", delay: "2.2s", duration: "8.2s" },
  { top: "12%",  left: "48%",  size: 20, color: "text-indigo-400", delay: "1.1s", duration: "6.8s" },
  { top: "32%",  left: "68%",  size: 22, color: "text-sky-300",    delay: "2.7s", duration: "5.8s" },
  { top: "72%",  left: "18%",  size: 30, color: "text-yellow-400", delay: "0.3s", duration: "7.2s" },
  { top: "85%",  left: "52%",  size: 16, color: "text-cyan-300",   delay: "3.2s", duration: "4.8s" },
  { top: "5%",   left: "30%",  size: 26, color: "text-blue-400",   delay: "0.8s", duration: "6.5s" },
  { top: "52%",  left: "22%",  size: 20, color: "text-indigo-300", delay: "1.9s", duration: "7s"   },
];

const getNeobrutalistClasses = (size: number) => {
  if (size > 120) {
    return "shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[6px] active:translate-y-[6px] active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)]";
  }
  if (size >= 100) {
    return "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)]";
  }
  if (size >= 50) {
    return "shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)]";
  }
  return "shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)]";
};

const getRotationClass = (index: number) => {
  const rotations = ["rotate-2", "-rotate-2", "rotate-1", "-rotate-1", "rotate-3", "-rotate-3"];
  return rotations[index % rotations.length];
};

const getOrbCoords = (skill: SkillItem, mode: "mobile" | "tablet" | "desktop") => {
  if (mode === "mobile") {
    return { top: skill.mobileTop, left: skill.mobileLeft };
  }
  if (mode === "tablet") {
    return { top: skill.tabletTop, left: skill.tabletLeft };
  }
  return { top: skill.finalTop, left: skill.finalLeft };
};

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [animStep, setAnimStep] = useState(0); // 0: hidden, 1: hand high, 2: hand down & orbs emerge, 3: floating
  const [screenMode, setScreenMode] = useState<"mobile" | "tablet" | "desktop">("desktop");
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const handRef = useRef<HTMLDivElement>(null);
  const markerRef = useRef<HTMLDivElement>(null);
  const [palmCenter, setPalmCenter] = useState({ x: 50, y: 72 });
  const [canvasSize, setCanvasSize] = useState({ width: 1280, height: 700 });

  const updatePalmCenter = useCallback(() => {
    if (canvasRef.current && markerRef.current) {
      const canvasRect = canvasRef.current.getBoundingClientRect();
      const markerRect = markerRef.current.getBoundingClientRect();
      if (canvasRect.width > 0 && canvasRect.height > 0) {
        const x = ((markerRect.left + markerRect.width / 2) - canvasRect.left) / canvasRect.width * 100;
        const y = ((markerRect.top + markerRect.height / 2) - canvasRect.top) / canvasRect.height * 100;
        if (!isNaN(x) && !isNaN(y)) {
          setPalmCenter({ x, y });
          setCanvasSize({ width: canvasRect.width, height: canvasRect.height });
          return;
        }
      }
    }
    // Fallback if measurements are not available yet
    const defaultY = screenMode === "mobile" ? 84 : screenMode === "tablet" ? 80 : 72;
    setPalmCenter({ x: 50, y: defaultY });
  }, [screenMode]);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 768) {
        setScreenMode("mobile");
      } else if (w < 1024) {
        setScreenMode("tablet");
      } else {
        setScreenMode("desktop");
      }
      updatePalmCenter();
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [updatePalmCenter]);

  // Observe canvas container and dummy hand size changes
  useEffect(() => {
    if (typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(() => {
      updatePalmCenter();
    });
    if (canvasRef.current) {
      observer.observe(canvasRef.current);
    }
    if (handRef.current) {
      observer.observe(handRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [updatePalmCenter]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Choreograph the magic sequence steps
  useEffect(() => {
    let t0: NodeJS.Timeout;
    let t1: NodeJS.Timeout;
    let t2: NodeJS.Timeout;

    if (isVisible) {
      t0 = setTimeout(() => {
        setAnimStep(1);
      }, 0);

      t1 = setTimeout(() => {
        setAnimStep(2);
      }, 1000);

      const maxDelay = Math.max(...skills.map((s) => s.delay));
      t2 = setTimeout(() => {
        setAnimStep(3);
      }, 1000 + maxDelay + 1200);
    } else {
      t0 = setTimeout(() => {
        setAnimStep(0);
      }, 0);
    }

    return () => {
      clearTimeout(t0);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [isVisible]);

  const settled = animStep >= 2;
  const orbsSettled = animStep === 3;

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative w-full bg-[#FFFBEF] border-t-4 border-black pb-12 sm:pb-16 md:pb-20 z-20"
    >

      {/* Section Title */}
      <div className="pt-16 sm:pt-20 pb-10 sm:pb-16 text-center relative z-20">
        <span className="inline-block bg-blue-400 text-black font-mono font-black text-xs md:text-sm px-3 py-1.5 border-2 border-black uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-4">
          My Superpowers
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-black uppercase tracking-tight leading-none">
          Skills
        </h2>
      </div>

      {/* Canvas */}
      <div ref={canvasRef} className="relative w-full max-w-7xl mx-auto h-[540px] sm:h-[580px] md:h-[680px] lg:h-[780px]">

        {/* Cute Sparkles */}
        {sparklesData.map((sp, idx) => (
          <div
            key={`sparkle-${idx}`}
            className="absolute pointer-events-none animate-sparkle"
            style={{
              top: sp.top,
              left: sp.left,
              width: sp.size,
              height: sp.size,
              zIndex: 11,
              "--sparkle-delay": sp.delay,
              "--sparkle-duration": sp.duration,
            } as React.CSSProperties}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className={`w-full h-full ${sp.color} filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]`}>
              <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4Z" />
            </svg>
          </div>
        ))}

        {/* Dummy Hand for dynamic palm coordinate calculations (always static and invisible) */}
        <div
          className="absolute inset-0 -bottom-[35px] sm:-bottom-[65px] md:-bottom-[110px] lg:-bottom-52 flex items-end justify-center pointer-events-none opacity-0"
          style={{
            transform: "scale(0.95) translateY(0)",
            zIndex: 1,
          }}
        >
          <div ref={handRef} className="relative w-full h-auto flex items-end justify-center pointer-events-none">
            <Image
              src="/images/hand.png"
              alt=""
              width={1024}
              height={764}
              className="w-full h-auto"
              priority
              onLoad={updatePalmCenter}
            />
            {/* Invisible marker at the center of the palm */}
            <div
              ref={markerRef}
              className="absolute top-[58%] left-[52%] -translate-x-1/2 -translate-y-1/2 w-1 h-1 pointer-events-none opacity-0"
            />
          </div>
        </div>

        {/* The Big Hand — choreographically positioned and scaled */}
        <div
          className="absolute inset-0 -bottom-[35px] sm:-bottom-[65px] md:-bottom-[110px] lg:-bottom-52 flex items-end justify-center pointer-events-none"
          style={{
            opacity: animStep > 0 ? 1 : 0,
            transform: animStep === 1
              ? "scale(1.05) translateY(-20%)"
              : animStep >= 2
                ? "scale(0.92) translateY(0)"
                : "scale(0) translateY(-20%)",
            transition: "transform 1.2s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.8s ease",
            zIndex: 20,
          }}
        >
          <div className="relative w-full h-auto flex items-end justify-center pointer-events-none">
            <Image
              src="/images/hand.png"
              alt="Magic hand casting skills"
              width={1024}
              height={764}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* SVG Threads — curvy Bézier strings from palm to each orb */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          style={{ zIndex: 25 }}
        >
          {skills.map((skill, i) => {
            const palmX = palmCenter.x;
            const palmY = palmCenter.y;

            const scale = screenMode === "mobile" ? 0.38 : screenMode === "tablet" ? 0.72 : 1;
            const size = Math.max(screenMode === "mobile" ? 35 : 50, Math.round(skill.size * scale));
            const coords = getOrbCoords(skill, screenMode);

            const orbLeftNum = parseFloat(coords.left);
            const orbTopNum = parseFloat(coords.top);
            const offsetX = (size / canvasSize.width) * 100 / 2;
            const offsetY = (size / canvasSize.height) * 100 / 2;

            const endX = orbLeftNum + offsetX;
            const endY = orbTopNum + offsetY;

            // Direction vector
            const dx = endX - palmX;
            const dy = endY - palmY;
            const len = Math.sqrt(dx * dx + dy * dy) || 1;

            // Perpendicular unit vector
            const perpX = -dy / len;
            const perpY = dx / len;

            // Alternate S-curve direction per orb
            const curviness = 5 + (i % 4) * 2.5;
            const sign = i % 2 === 0 ? 1 : -1;

            const cp1x = palmX + dx * 0.3 + perpX * curviness * sign;
            const cp1y = palmY + dy * 0.3 + perpY * curviness * sign;
            const cp2x = palmX + dx * 0.7 - perpX * curviness * sign;
            const cp2y = palmY + dy * 0.7 - perpY * curviness * sign;

            const d = settled
              ? `M ${palmX},${palmY} C ${cp1x},${cp1y} ${cp2x},${cp2y} ${endX},${endY}`
              : `M ${palmX},${palmY} C ${palmX},${palmY} ${palmX},${palmY} ${palmX},${palmY}`;

            return (
              <path
                key={`thread-${i}`}
                d={d}
                fill="none"
                stroke="#3B82F6"
                strokeWidth={screenMode === "mobile" ? "0.2" : "0.15"}
                opacity={settled ? 0.6 : 0}
                style={{
                  transition: settled
                    ? `d 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) ${skill.delay}ms, opacity 0.4s ease ${skill.delay}ms`
                    : "d 0.5s ease-in, opacity 0.3s ease-in",
                }}
              />
            );
          })}
        </svg>

          {skills.map((skill, i) => {
            const scale = screenMode === "mobile" ? 0.38 : screenMode === "tablet" ? 0.72 : 1;
            const size = Math.max(screenMode === "mobile" ? 35 : 50, Math.round(skill.size * scale));
            const rotationClass = getRotationClass(i);
            const shadowHoverClass = getNeobrutalistClasses(size);
            const floatAnim = orbsSettled ? floatAnimations[i % floatAnimations.length] : "none";
            const coords = getOrbCoords(skill, screenMode);

            return (
              <div
                key={`skill-${i}`}
                className={`absolute flex items-center justify-center border-2 sm:border-4 border-black font-black uppercase text-center select-none cursor-pointer transition-all duration-300 ${skill.bg} ${rotationClass} ${shadowHoverClass}`}
                style={{
                  width: size,
                  height: size,
                  left: settled
                    ? coords.left
                    : `calc(${palmCenter.x}% - ${size / 2}px)`,
                  top: settled
                    ? coords.top
                    : `calc(${palmCenter.y}% - ${size / 2}px)`,
                  opacity: settled ? 1 : 0,
                  transform: settled ? "scale(1)" : "scale(0)",
                  transition: settled
                    ? `left 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) ${skill.delay}ms, top 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) ${skill.delay}ms, opacity 0.8s ease ${skill.delay}ms, transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${skill.delay}ms`
                    : "left 0.5s ease-in, top 0.5s ease-in, opacity 0.3s ease-in, transform 0.5s ease-in",
                  animation: floatAnim,
                  zIndex: 30,
                }}
              >
                {skill.name && (
                  <span
                    style={{
                      fontSize: screenMode === "mobile"
                        ? (skill.size > 120 ? "0.62rem" : skill.size >= 100 ? "0.52rem" : "0.45rem")
                        : screenMode === "tablet"
                          ? (skill.size > 120 ? "0.85rem" : skill.size >= 100 ? "0.75rem" : "0.62rem")
                          : (skill.size > 120 ? "1.1rem" : skill.size >= 100 ? "0.9rem" : "0.75rem"),
                      lineHeight: "1.05",
                    }}
                    className="px-0.5 text-center font-black"
                  >
                    {skill.name}
                  </span>
                )}
              </div>
            );
          })}
      </div>

      {/* Categorized Skills Breakdown (Technical, Creative, Organizational) */}
      <div className="max-w-4xl mx-auto px-4 mt-8 md:mt-12 relative z-30">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
          <div className="bg-[#FFFDEE] border-3 border-black p-3.5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            <span className="text-[11px] font-mono font-black uppercase bg-purple-200 text-black px-2 py-0.5 border border-black inline-block mb-2">
              ✦ Creative &amp; UI/UX
            </span>
            <div className="flex flex-wrap gap-1.5 font-mono text-[11px] font-bold">
              {["Figma", "UI/UX", "Wireframing", "Prototyping", "Design Systems"].map((s) => (
                <span key={s} className="bg-white border border-black px-2 py-0.5 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">{s}</span>
              ))}
            </div>
          </div>
          <div className="bg-[#FFFDEE] border-3 border-black p-3.5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            <span className="text-[11px] font-mono font-black uppercase bg-cyan-200 text-black px-2 py-0.5 border border-black inline-block mb-2">
              ✦ Technical / Dev
            </span>
            <div className="flex flex-wrap gap-1.5 font-mono text-[11px] font-bold">
              {["React", "Next.js", "TypeScript", "Node.js", "Tailwind", "Python", "MongoDB"].map((s) => (
                <span key={s} className="bg-white border border-black px-2 py-0.5 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">{s}</span>
              ))}
            </div>
          </div>
          <div className="bg-[#FFFDEE] border-3 border-black p-3.5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            <span className="text-[11px] font-mono font-black uppercase bg-emerald-200 text-black px-2 py-0.5 border border-black inline-block mb-2">
              ✦ Organizational
            </span>
            <div className="flex flex-wrap gap-1.5 font-mono text-[11px] font-bold">
              {["Agile", "Git & GitHub", "Workflow Planning", "Design-to-Code"].map((s) => (
                <span key={s} className="bg-white border border-black px-2 py-0.5 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
