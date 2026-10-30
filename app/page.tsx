import Image from "next/image";
import Navbar from "../components/Navbar";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import ProjectsHanging from "../components/ProjectsHanging";
import CodingStats from "../components/CodingStats";
import Contact from "../components/Contact";
import CoolModeToggle from "../components/CoolModeToggle";
import LiquidHover from "../components/LiquidHover";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#FFFBEF] flex flex-col w-full overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <main className="relative w-full flex justify-center pt-24 sm:pt-28 pb-8 sm:pb-12 px-4 sm:px-6 md:px-12 overflow-hidden">
        {/* Background container to prevent roadmap overflow */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
          {/* Hero Roadmap SVG in the background */}
          <svg className="absolute inset-0 w-full h-full">
            {/* Curvy Path 1: Smooth Cubic Bezier */}
            <path
              d="M -100 220 C 200 180, 150 420, 500 580 C 850 740, 950 380, 1400 550 C 1600 620, 1900 580, 2200 500"
              fill="none"
              stroke="#111111"
              strokeWidth={2}
              strokeDasharray="12 8"
              opacity={0.2}
            />
            {/* Curvy Path 2: Smooth Cubic Bezier */}
            <path
              d="M -100 500 C 250 590, 400 350, 800 460 C 1100 550, 1200 300, 1600 400 C 1800 450, 2000 550, 2200 520"
              fill="none"
              stroke="#111111"
              strokeWidth={2}
              strokeDasharray="12 8"
              opacity={0.2}
            />

            {/* Hand-drawn Compass Rose / Star in top-right - visible on all screens */}
            <g transform="translate(1300, 220)" opacity={0.2} className="hidden lg:block">
              <path d="M 0 -24 L 0 24 M -24 0 L 24 0" stroke="#111111" strokeWidth={2} />
              <path d="M -12 -12 L 12 12 M -12 12 L 12 -12" stroke="#111111" strokeWidth={1.5} strokeDasharray="3 3" />
              <circle cx={0} cy={0} r={5} fill="none" stroke="#111111" strokeWidth={2} />
            </g>
            <g transform="translate(320, 130)" opacity={0.25} className="lg:hidden">
              <path d="M 0 -20 L 0 20 M -20 0 L 20 0" stroke="#111111" strokeWidth={2} />
              <path d="M -10 -10 L 10 10 M -10 10 L 10 -10" stroke="#111111" strokeWidth={1.5} strokeDasharray="3 3" />
              <circle cx={0} cy={0} r={4} fill="none" stroke="#111111" strokeWidth={2} />
            </g>

            {/* Hand-drawn Star in bottom-left - visible on all screens */}
            <g transform="translate(60, 460)" opacity={0.25}>
              <path d="M 0 -18 L 0 18 M -18 0 L 18 0" stroke="#111111" strokeWidth={2} />
              <circle cx={0} cy={0} r={4} fill="none" stroke="#111111" strokeWidth={2} />
            </g>

            {/* Soft color accent spots in the background - spread across mobile, tablet & desktop */}
            <circle cx={80} cy={260} r={6.5} className="fill-sky-400 opacity-35" />
            <circle cx={220} cy={520} r={4} className="fill-emerald-400 opacity-35" />
            <circle cx={140} cy={600} r={3} className="fill-sky-400 opacity-35" />
            <circle cx={290} cy={310} r={5} className="fill-yellow-400 opacity-35" />
            
            <circle cx={650} cy={240} r={4} className="fill-emerald-400 opacity-35" />
            <circle cx={800} cy={550} r={5} className="fill-sky-400 opacity-35" />
            
            <circle cx={1200} cy={320} r={4} className="fill-sky-400 opacity-35" />
            <circle cx={1450} cy={480} r={3} className="fill-emerald-400 opacity-35" />
            <circle cx={1650} cy={280} r={5} className="fill-sky-400 opacity-35" />
            <circle cx={1850} cy={520} r={4} className="fill-emerald-400 opacity-35" />
            <circle cx={2050} cy={360} r={5} className="fill-emerald-400 opacity-35" />
          </svg>
        </div>

        <div className="relative w-full max-w-7xl z-10 flex flex-col lg:flex-row items-center lg:items-center justify-between min-h-[500px] lg:min-h-[580px]">
          {/* Text Card ("The Box") - Left side */}
          <div className="relative z-10 w-full lg:max-w-xl xl:max-w-2xl p-5 sm:p-8 md:p-10 lg:pr-16 bg-[#FFFDEE] border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] order-1">
            <span className="inline-block text-xs font-mono font-black uppercase tracking-wider bg-blue-300 text-black px-2.5 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-3 sm:mb-4">
              Hi, I&apos;m
            </span>

            <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-black uppercase tracking-tight leading-none mb-2.5 sm:mb-3">
              Chaitanya
            </h1>

            <h2 className="inline-block text-sm sm:text-lg md:text-2xl font-black bg-cyan-300 text-black px-2.5 sm:px-4 py-1 md:py-1.5 border-2 border-black uppercase tracking-wide shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              UI/UX Designer &amp; Full Stack Dev
            </h2>

            <p className="mt-4 md:mt-6 text-xs sm:text-base md:text-lg font-mono text-black leading-relaxed border-t-2 border-black pt-3 sm:pt-4">
              I build modern web applications with Full Stack, Next.js and AI-powered solutions.
            </p>

            <div className="mt-5 sm:mt-8 flex gap-3 md:gap-4 flex-wrap relative z-30 pointer-events-auto">
              <a
                href="#contact"
                className="bg-emerald-300 hover:bg-emerald-400 text-black border-3 sm:border-4 border-black px-4 sm:px-7 py-2.5 sm:py-3.5 font-black uppercase tracking-wider text-xs sm:text-base shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all cursor-pointer text-center flex items-center gap-1.5 sm:gap-2 group"
              >
                <span>Let&apos;s Talk</span>
                <span className="inline-block transform group-hover:translate-x-1.5 transition-transform duration-200 font-bold">→</span>
              </a>

              <a
                href="#projects"
                className="bg-yellow-300 hover:bg-yellow-400 text-black border-3 sm:border-4 border-black px-4 sm:px-7 py-2.5 sm:py-3.5 font-black uppercase tracking-wider text-xs sm:text-base shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all cursor-pointer text-center flex items-center gap-1.5 sm:gap-2 group"
              >
                <span>Projects</span>
              </a>
            </div>
          </div>

          {/* Character Guy Sitting - Anchored to the Right on desktop, below box with clean margin on mobile */}
          <div className="relative lg:absolute lg:right-[-40px] xl:right-[-10px] 2xl:right-0 lg:bottom-[-20px] xl:bottom-[-10px] w-full max-w-[340px] sm:max-w-[440px] md:max-w-[500px] lg:max-w-none lg:w-[680px] xl:w-[780px] 2xl:w-[840px] z-20 pointer-events-none order-2 mt-4 sm:mt-6 lg:mt-0 mb-3 sm:mb-4 lg:mb-0 mx-auto">
            <Image
              src="/images/hero.png"
              alt="Cartoon tech guy character"
              width={1264}
              height={848}
              priority
              className="w-full h-auto object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.08)]"
            />
          </div>
        </div>
      </main>

      {/* About Me Section */}
      <section id="about" className="relative w-full bg-[#FFFBEF] border-t-4 border-black mt-0 lg:-mt-36 pt-12 sm:pt-16 lg:pt-28 pb-16 sm:pb-24 px-4 sm:px-6 md:px-12 z-0">
        <div className="max-w-6xl mx-auto relative">
          {/* Rope Hanging Character Image Container - Positioned cleanly in header area on mobile, aligned in empty space between boxes on desktop */}
          <div className="block absolute right-[-5px] sm:right-2 md:left-[calc(50%-117px)] lg:left-[calc(50%-144px)] top-[-40px] sm:top-[-60px] md:top-[-80px] lg:top-[-115px] md:bottom-[-96px] z-20 w-[110px] sm:w-[140px] md:w-[260px] lg:w-[320px] h-[185px] sm:h-[220px] md:h-auto overflow-hidden md:overflow-visible pointer-events-none group/rope">
            {/* Left Trigger (Approach from Left / Tap) */}
            <div className="absolute left-0 top-0 w-[55px] sm:w-[70px] md:w-[117px] lg:w-[144px] h-[185px] sm:h-[220px] md:h-full cursor-pointer pointer-events-auto z-30 peer/left" />
            
            {/* Right Trigger (Approach from Right / Tap) */}
            <div className="absolute left-[55px] sm:left-[70px] md:left-[117px] lg:left-[144px] top-0 w-[55px] sm:w-[70px] md:w-[117px] lg:w-[144px] h-[185px] sm:h-[220px] md:h-full cursor-pointer pointer-events-auto z-30 peer/right" />
            
            {/* Rotating Container (responds to hover and mobile active tap) */}
            <div className="w-full h-full origin-top transition-transform duration-700 ease-out 
              peer-hover/left:rotate-[-3.5deg] peer-hover/right:rotate-[3.5deg] peer-active/left:rotate-[-4deg] peer-active/right:rotate-[4deg] group-active/rope:rotate-[3deg]">
              
              {/* Rope hanging image and continuous rope line */}
              <div className="w-full h-full relative">
                <Image
                  src="/images/rope.png"
                  alt="Character hanging on a rope"
                  width={1536}
                  height={4400}
                  className="absolute left-0 top-0 pointer-events-none w-full h-auto drop-shadow-[0_4px_12px_rgba(0,0,0,0.12)]"
                />

                {/* Continuous black rope line extending all the way down to touch the footer border line */}
                <div 
                  className="hidden md:block absolute left-[calc(45%-2px)] top-[600px] lg:top-[750px] bottom-0 w-[4.5px] bg-black -z-10" 
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Hand-drawn curved arrow & hint text pointing directly at the blue circle on the rope */}
            <div className="hidden md:block absolute left-[calc(42.3%-170px)] top-[373px] lg:top-[468px] w-[170px] h-[75px] z-20 pointer-events-none select-none">
              <svg width="170" height="75" viewBox="0 0 170 75" className="opacity-85 overflow-visible">
                {/* Sketchy curved arrow pointing directly at the blue circle */}
                <path
                  d="M 52,46 C 72,60 96,60 118,53 C 134,47 146,40 156,38"
                  fill="none"
                  stroke="#2b2624"
                  strokeWidth={2.2}
                  strokeLinecap="round"
                  strokeDasharray="4 3"
                />
                {/* Arrowhead pointing straight horizontally into the blue circle */}
                <path
                  d="M 144,31 L 156,38 M 144,45 L 156,38"
                  stroke="#2b2624"
                  strokeWidth={2.2}
                  strokeLinecap="round"
                />
                {/* Text: try clicking here */}
                <text
                  x="24"
                  y="24"
                  fill="#2b2624"
                  className="font-mono text-[11px] font-black tracking-wide"
                >
                  try clicking
                </text>
                <text
                  x="50"
                  y="38"
                  fill="#2b2624"
                  className="font-mono text-[11px] font-black tracking-wide"
                >
                  here
                </text>
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-24 items-start">
            
            {/* Left Column: Title, Headline & Framed Photo */}
            <div className="space-y-5 sm:space-y-6 pr-2 sm:pr-4 md:pr-6 lg:pr-8">
              {/* Heading Group */}
              <div className="space-y-3 sm:space-y-4">
                <div className="inline-block bg-blue-400 text-black font-mono font-black text-xs md:text-sm px-3.5 py-1.5 border-2 border-black uppercase tracking-wider shadow-[2.5px_2.5px_0px_0px_rgba(0,0,0,1)]">
                  Who is Chaitanya?
                </div>
                
                <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl font-black text-black uppercase tracking-tight leading-none">
                  About <br /> Me
                </h2>
                
                <p className="font-mono text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 max-w-[280px] sm:max-w-xs md:max-w-[270px] lg:max-w-md leading-relaxed">
                  Designing interfaces that feel alive and writing clean, scalable code that makes complex things simple.
                </p>
              </div>

              {/* Framed Photo Card - Aesthetic Neo-Brutalist Frame */}
              <div className="relative pt-2 w-full max-w-[280px] sm:max-w-[310px] md:max-w-[285px] lg:max-w-[320px]">
                {/* Playful sticker in top-right */}
                <div className="absolute -top-1.5 -right-2 sm:-top-2 sm:-right-3 z-20 bg-yellow-300 border-2 border-black text-black font-mono font-black uppercase text-[10px] sm:text-xs px-2.5 py-0.5 rotate-[3deg] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] pointer-events-none">
                  ✦ THAT&apos;S ME
                </div>

                {/* Subtle washi tape strip in top-left */}
                <div 
                  className="absolute -top-1 left-5 z-20 w-14 h-3.5 bg-amber-200/90 border border-black/40 rotate-[-3deg] shadow-xs pointer-events-none" 
                  aria-hidden="true" 
                />

                {/* Main Physical Frame Card */}
                <div className="bg-white border-4 border-black p-3 sm:p-3.5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 group rotate-[-1deg] hover:rotate-0">
                  {/* Photo with clean crop and liquid distortion effect */}
                  <div className="relative w-full aspect-[4/5] border-2 border-black overflow-hidden bg-neutral-900 cursor-pointer">
                    <LiquidHover
                      imageSrc="/images/chaitanya.jpg"
                      intensity={45}
                      cursorSize={60}
                      resolution={12}
                      className="w-full h-full"
                    />

                    {/* Aesthetic Viewfinder & Location Badges */}
                    <div className="absolute top-2 left-2 z-10 flex items-center gap-1.5 bg-black/80 text-white font-mono text-[9px] px-1.5 py-0.5 border border-white/20 select-none pointer-events-none">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                      <span>LIVE</span>
                    </div>

                    <div className="absolute bottom-2 right-2 z-10 bg-white/95 text-black font-mono font-black text-[9px] px-1.5 py-0.5 border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] select-none pointer-events-none">
                      PUNE, IN
                    </div>
                  </div>

                  {/* Polaroid-style caption strip */}
                  <div className="mt-2.5 pt-2 border-t-2 border-black flex items-center justify-between font-mono select-none">
                    <div>
                      <p className="text-xs sm:text-sm font-black text-black uppercase tracking-tight">
                        Chaitanya Selote
                      </p>
                      <p className="text-[10px] font-bold text-gray-600 uppercase tracking-wider">
                        Full Stack &amp; UI/UX
                      </p>
                    </div>
                    <span className="bg-emerald-300 text-black border border-black px-2 py-0.5 text-[10px] font-mono font-black uppercase tracking-wider shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]">
                      ✦ DEV
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column: Bio & Stats Dashboard Card */}
            <div className="relative">
              {/* Rotate Accent Tag */}
              <div className="absolute -top-3.5 -left-2 sm:-top-4 sm:-left-3 lg:left-3 z-10 bg-yellow-300 border-2 border-black text-black font-mono font-black uppercase text-[10px] sm:text-xs px-2.5 sm:px-3.5 py-1 sm:py-1.5 rotate-[-3deg] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                My Story
              </div>
              
              {/* The Main Bio Card */}
              <div className="bg-white border-4 border-black p-5 sm:p-8 md:p-12 shadow-[6px_6px_0px_0px_#2F6BFF] sm:shadow-[10px_10px_0px_0px_#2F6BFF] md:shadow-[12px_12px_0px_0px_#2F6BFF] relative">
                <p className="font-mono text-sm sm:text-base md:text-lg text-black leading-relaxed">
                  I am a Full Stack Developer &amp; UI/UX Designer who bridges the gap between clean code and creative design. I craft responsive frontends, intuitive interfaces, and robust applications.
                </p>
                
                <p className="font-mono text-xs sm:text-sm md:text-base text-gray-700 mt-3 sm:mt-4 leading-relaxed border-t-2 border-dashed border-black pt-3 sm:pt-4">
                  I have a keen eye for visual layout, typography, and aesthetics, which I inject into every Figma prototype, design system, and web product I build.
                </p>

                {/* Interests & Goals Block */}
                <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t-2 border-black grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-[#FFFDEE] border-2 border-black p-3 sm:p-3.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-mono font-black text-[11px] sm:text-xs uppercase bg-purple-200 text-black px-2 py-0.5 border border-black inline-block mb-1.5">
                      ✦ Interests
                    </span>
                    <p className="font-mono text-xs text-gray-800 leading-snug">
                      Design Systems, Human-Centered UI/UX, Micro-Animations, and Design-to-Code Engineering.
                    </p>
                  </div>
                  <div className="bg-[#FFFDEE] border-2 border-black p-3 sm:p-3.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-mono font-black text-[11px] sm:text-xs uppercase bg-emerald-200 text-black px-2 py-0.5 border border-black inline-block mb-1.5">
                      ✦ Goals
                    </span>
                    <p className="font-mono text-xs text-gray-800 leading-snug">
                      Creating community-first digital tools, contributing to open-source UI ecosystems, and mastering full-stack UX.
                    </p>
                  </div>
                </div>
                
                {/* Integrated Achievements */}
                <div className="border-t-4 border-black mt-6 sm:mt-8 pt-5 sm:pt-6 grid grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <div className="text-3xl sm:text-4xl md:text-5xl font-black text-black">Dev &amp; UX</div>
                    <div className="font-mono text-[11px] sm:text-xs md:text-sm text-gray-600 font-bold uppercase tracking-wider mt-1">Design + Code</div>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl md:text-5xl font-black text-black">15+</div>
                    <div className="font-mono text-[11px] sm:text-xs md:text-sm text-gray-600 font-bold uppercase tracking-wider mt-1">Projects Built</div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Experience Section — Career Timeline */}
      <Experience />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section — Hanging Gallery */}
      <ProjectsHanging />

      {/* Coding Stats Section — GitHub & LeetCode Cards */}
      <CodingStats />

      {/* Contact Me Section */}
      <Contact />

      {/* Easter Egg Cool Mode Toggle */}
      <CoolModeToggle />
    </div>
  );
}