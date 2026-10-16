"use client";

import Image from "next/image";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full bg-[#FFFBEF] border-t-4 border-black py-16 sm:py-20 px-4 sm:px-6 md:px-12 z-20 flex flex-col items-center"
      aria-label="Contact Me"
    >
      {/* Background container */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        {/* Treasure Roadmap SVG in the background */}
        <svg
          className="absolute inset-0 w-full h-full"
        >
          {/* Main Curved Road Line wrapping under the card */}
          <path
            d="M -100 120 C 200 80, 150 320, 500 480 C 850 640, 950 280, 1400 450 C 1600 520, 1900 480, 2200 400"
            fill="none"
            stroke="#111111"
            strokeWidth={2}
            strokeDasharray="12 8"
            opacity={0.2}
          />
          <path
            d="M -100 400 C 250 490, 400 250, 800 360 C 1100 450, 1200 200, 1600 300 C 1800 350, 2000 450, 2200 420"
            fill="none"
            stroke="#111111"
            strokeWidth={2}
            strokeDasharray="12 8"
            opacity={0.2}
          />

          {/* Hand-drawn Compass Rose / Star in top-left - visible on all screens */}
          <g transform="translate(180, 110)" opacity={0.25} className="hidden sm:block">
            <path d="M 0 -24 L 0 24 M -24 0 L 24 0" stroke="#111111" strokeWidth={2} />
            <path d="M -12 -12 L 12 12 M -12 12 L 12 -12" stroke="#111111" strokeWidth={1.5} strokeDasharray="3 3" />
            <circle cx={0} cy={0} r={5} fill="none" stroke="#111111" strokeWidth={2} />
          </g>
          <g transform="translate(45, 95)" opacity={0.25} className="sm:hidden">
            <path d="M 0 -18 L 0 18 M -18 0 L 18 0" stroke="#111111" strokeWidth={2} />
            <path d="M -9 -9 L 9 9 M -9 9 L 9 -9" stroke="#111111" strokeWidth={1.5} strokeDasharray="3 3" />
            <circle cx={0} cy={0} r={4} fill="none" stroke="#111111" strokeWidth={2} />
          </g>

          {/* Hand-drawn Star in bottom-right - visible on all screens */}
          <g transform="translate(1120, 520)" opacity={0.25} className="hidden lg:block">
            <path d="M 0 -18 L 0 18 M -18 0 L 18 0" stroke="#111111" strokeWidth={2} />
            <circle cx={0} cy={0} r={4} fill="none" stroke="#111111" strokeWidth={2} />
          </g>
          <g transform="translate(320, 520)" opacity={0.25} className="lg:hidden">
            <path d="M 0 -16 L 0 16 M -16 0 L 16 0" stroke="#111111" strokeWidth={2} />
            <circle cx={0} cy={0} r={3.5} fill="none" stroke="#111111" strokeWidth={2} />
          </g>

          {/* Soft color accent spots in the background - visible on all screens */}
          <circle cx={60} cy={160} r={6} className="fill-sky-400 opacity-35" />
          <circle cx={250} cy={110} r={7.5} className="fill-sky-400 opacity-35" />
          <circle cx={420} cy={340} r={3} className="fill-emerald-400 opacity-35" />
          <circle cx={850} cy={200} r={5} className="fill-yellow-400 opacity-35" />
          <circle cx={980} cy={480} r={4} className="fill-cyan-400 opacity-35" />
          
          <circle cx={120} cy={330} r={7} className="fill-sky-400 opacity-35" />
          <circle cx={280} cy={530} r={3} className="fill-emerald-400 opacity-35" />
          <circle cx={820} cy={380} r={5} className="fill-sky-400 opacity-35" />
          <circle cx={700} cy={120} r={4} className="fill-emerald-400 opacity-35" />
          <circle cx={1050} cy={240} r={3} className="fill-sky-400 opacity-35" />
          <circle cx={1180} cy={360} r={5} className="fill-emerald-400 opacity-35" />
          <circle cx={550} cy={180} r={4} className="fill-sky-400 opacity-35" />
          <circle cx={950} cy={100} r={4} className="fill-emerald-400 opacity-35" />

          {/* Far-Right Pink & Green Dots (Desktop) */}
          <circle cx={1300} cy={530} r={4} className="fill-sky-400 opacity-35" />
          <circle cx={1400} cy={200} r={4} className="fill-sky-400 opacity-35" />
          <circle cx={1480} cy={150} r={4} className="fill-emerald-400 opacity-35" />
          <circle cx={1550} cy={420} r={3} className="fill-emerald-400 opacity-35" />
          <circle cx={1680} cy={120} r={5} className="fill-sky-400 opacity-35" />
          <circle cx={1820} cy={480} r={4} className="fill-emerald-400 opacity-35" />
          <circle cx={1950} cy={280} r={3} className="fill-sky-400 opacity-35" />
          <circle cx={2100} cy={180} r={5} className="fill-emerald-400 opacity-35" />
        </svg>
      </div>

      <div className="w-full max-w-xl flex flex-col items-center relative z-10">
        
        {/* Top: Flipped girl illustration sitting and overlapping the section line */}
        <div className="relative z-20 w-full max-w-[320px] sm:max-w-[420px] md:max-w-[500px] -mt-[110px] sm:-mt-[165px] md:-mt-[225px] mb-0 pointer-events-none">
          <Image
            src="/images/bye.png"
            alt="Goodbye illustration"
            width={1000}
            height={800}
            className="pointer-events-none w-full h-auto object-contain scale-x-[-1]"
            priority
          />
        </div>

        {/* Bottom: Vertical Contact details card */}
        <div className="relative z-10 w-full bg-[#FFFDEE] border-4 border-black p-5 sm:p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] space-y-5 sm:space-y-6 text-left -mt-8 sm:-mt-12 md:-mt-16">
          
          <div className="space-y-2.5 sm:space-y-3">
            <span className="inline-block text-xs font-mono font-black uppercase tracking-wider bg-emerald-300 text-black px-2.5 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              Connect With Me
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black uppercase tracking-tight leading-none">
              Contact Me
            </h2>
            <p className="font-mono text-xs sm:text-sm text-gray-700 leading-relaxed border-t-2 border-dashed border-black pt-3 sm:pt-4">
              Have a project in mind, want to collaborate, or just want to say hello? Check out my GitHub profile or send an email. I will get back to you as soon as possible!
            </p>
          </div>

          {/* Links Block (Vertical Stack: Email, GitHub, LinkedIn) */}
          <div className="flex flex-col gap-3 sm:gap-3.5">
            {/* Gmail Button */}
            <a
              href="mailto:selotechaitanya09@gmail.com"
              className="bg-sky-300 text-black border-3 sm:border-4 border-black px-4 sm:px-6 py-3 sm:py-3.5 font-black uppercase tracking-wider text-xs sm:text-sm md:text-base shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all flex items-center justify-between gap-3 sm:gap-4 group cursor-pointer"
            >
              <span>Send an Email</span>
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1.5 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>

            {/* GitHub Button */}
            <a
              href="https://github.com/selotechaitanya-svg"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-300 text-black border-3 sm:border-4 border-black px-4 sm:px-6 py-3 sm:py-3.5 font-black uppercase tracking-wider text-xs sm:text-sm md:text-base shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all flex items-center justify-between gap-3 sm:gap-4 group cursor-pointer"
            >
              <span>View GitHub Profile</span>
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 fill-current transform group-hover:translate-x-1.5 transition-transform duration-200"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>

            {/* LinkedIn Button */}
            <a
              href="https://www.linkedin.com/in/chaitanya-selote-17a7a4381/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-300 text-black border-3 sm:border-4 border-black px-4 sm:px-6 py-3 sm:py-3.5 font-black uppercase tracking-wider text-xs sm:text-sm md:text-base shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all flex items-center justify-between gap-3 sm:gap-4 group cursor-pointer"
            >
              <span>View LinkedIn Profile</span>
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 fill-current transform group-hover:translate-x-1.5 transition-transform duration-200"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
