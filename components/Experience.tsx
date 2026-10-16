"use client";

import React from "react";

interface ExperienceItem {
  id: string;
  role: string;
  roleBg: string;
  period: string;
  company: string;
  companyColor: string;
  nodeColor: string;
  description: string;
  skills: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "FULL-STACK WEB DEVELOPER",
    roleBg: "bg-cyan-300",
    period: "July 2026 - PRESENT",
    company: "@ FREELANCE / INDEPENDENT",
    companyColor: "text-lime-600 dark:text-lime-500",
    nodeColor: "bg-yellow-300",
    description:
      "Building modern full-stack web applications, responsive user interfaces, backend APIs, database integrations, landing pages, and scalable business websites.",
    skills: ["React", "Next.js", "Node.js", "MongoDB", "UI/UX", "Tailwind CSS"],
  },
  {
    id: "exp-2",
    role: "GRAPHIC DESIGNER & VIDEO EDITOR",
    roleBg: "bg-pink-300",
    period: "Feb 2026 - June 2026",
    company: "@ CREATIVE_STUDIO",
    companyColor: "text-pink-500",
    nodeColor: "bg-pink-400",
    description:
      "Worked on graphic design, social media creatives, branding assets, video editing, promotional content, and visual storytelling projects.",
    skills: ["Figma", "Branding", "Video Editing", "Visual Design", "Motion Graphics"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative w-full bg-[#FFFBEF] border-t-4 border-black py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 z-10 overflow-hidden"
      aria-label="Experience Log"
    >
      {/* Blueprint Dot Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: "radial-gradient(#111111 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16 space-y-2.5 sm:space-y-3">
          <div className="inline-block bg-purple-300 text-black font-mono font-black text-xs md:text-sm px-3.5 py-1.5 border-2 border-black uppercase tracking-wider shadow-[2.5px_2.5px_0px_0px_rgba(0,0,0,1)] -rotate-1">
            Career Timeline
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-7xl font-black text-black uppercase tracking-tight leading-none select-none">
            EXPERIENCE<span className="text-red-500 underline decoration-4 decoration-red-500">_LOG</span>
          </h2>
          
          <p className="font-mono text-xs sm:text-sm md:text-base text-gray-700 max-w-xl mx-auto pt-1 sm:pt-2">
            A chronological timeline of hands-on industry roles, creative design work, and development milestones.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 md:pl-16">
          {/* Vertical Timeline Guide Wire */}
          <div
            className="absolute left-[7px] sm:left-[11px] md:left-[27px] top-6 bottom-6 w-1 bg-black z-0"
            aria-hidden="true"
          />

          <div className="space-y-8 sm:space-y-12">
            {EXPERIENCES.map((item) => (
              <div key={item.id} className="relative group">
                {/* Timeline Node Badge */}
                <div
                  className={`absolute -left-[23px] sm:-left-[30px] md:-left-[46px] top-6 sm:top-8 w-4 h-4 sm:w-5 sm:h-5 ${item.nodeColor} border-2 border-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] z-10 group-hover:scale-125 transition-transform duration-200`}
                  aria-hidden="true"
                />

                {/* Experience Card */}
                <div className="bg-white border-4 border-black p-4 sm:p-6 md:p-8 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all duration-200">
                  {/* Role & Date Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-2.5 sm:pb-3">
                    <h3 className={`inline-block text-sm sm:text-base md:text-xl font-black text-black uppercase tracking-tight px-2.5 sm:px-3 py-1 sm:py-1.5 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] ${item.roleBg}`}>
                      {item.role}
                    </h3>

                    <span className="inline-block self-start sm:self-auto bg-black text-white px-2.5 sm:px-3 py-1 sm:py-1.5 font-mono font-bold text-[10px] sm:text-xs uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,0.4)] border-2 border-black">
                      {item.period}
                    </span>
                  </div>

                  {/* Dashed Separator Line */}
                  <div className="border-t-2 border-dashed border-gray-300 my-2.5 sm:my-3" />

                  {/* Company / Client Tag */}
                  <div className={`font-mono font-black text-xs sm:text-sm uppercase tracking-wide mb-2.5 sm:mb-3 ${item.companyColor}`}>
                    {item.company}
                  </div>

                  {/* Description */}
                  <p className="font-mono text-xs sm:text-sm text-gray-700 leading-relaxed mb-4 sm:mb-5">
                    {item.description}
                  </p>

                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2 border-t border-gray-100">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-[#FFFDEE] text-black border border-black px-2 py-0.5 font-mono text-[10px] sm:text-[11px] font-bold shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
