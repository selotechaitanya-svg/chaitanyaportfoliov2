"use client";

import React, { useMemo, useRef, useEffect, useState, useCallback, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

const projectSparkles = [
  // Left side sparkles
  { top: "8%", left: "4%", size: 24, color: "text-blue-400", delay: "0s", duration: "5s" },
  { top: "12%", left: "14%", size: 18, color: "text-sky-400", delay: "0.8s", duration: "6.2s" },
  { top: "15%", left: "22%", size: 16, color: "text-blue-300", delay: "0.3s", duration: "5.5s" },
  { top: "38%", left: "7%", size: 20, color: "text-blue-400", delay: "0.4s", duration: "6.0s" },
  { top: "54%", left: "15%", size: 24, color: "text-blue-400", delay: "0.9s", duration: "5.4s" },
  { top: "58%", left: "8%", size: 20, color: "text-sky-400", delay: "0.5s", duration: "6s" },
  { top: "72%", left: "5%", size: 22, color: "text-blue-400", delay: "2.7s", duration: "5.8s" },
  { top: "85%", left: "28%", size: 24, color: "text-sky-400", delay: "3.1s", duration: "7.8s" },
  { top: "94%", left: "12%", size: 18, color: "text-sky-300", delay: "1.3s", duration: "5.7s" },

  // Center / Middle sparkles
  { top: "18%", left: "42%", size: 20, color: "text-sky-400", delay: "0.5s", duration: "5.6s" },
  { top: "24%", left: "58%", size: 26, color: "text-blue-300", delay: "2.1s", duration: "7.1s" },
  { top: "30%", left: "48%", size: 18, color: "text-indigo-400", delay: "1.0s", duration: "6.3s" },
  { top: "36%", left: "36%", size: 24, color: "text-blue-400", delay: "0.3s", duration: "5.9s" },
  { top: "42%", left: "64%", size: 20, color: "text-sky-300", delay: "1.7s", duration: "6.7s" },
  { top: "48%", left: "38%", size: 22, color: "text-blue-500", delay: "2.5s", duration: "7.2s" },
  { top: "52%", left: "52%", size: 28, color: "text-blue-400", delay: "0.2s", duration: "6.0s" },
  { top: "60%", left: "45%", size: 18, color: "text-sky-400", delay: "1.9s", duration: "5.8s" },
  { top: "65%", left: "62%", size: 18, color: "text-blue-300", delay: "1.0s", duration: "6.0s" },
  { top: "70%", left: "40%", size: 24, color: "text-indigo-300", delay: "2.8s", duration: "7.4s" },
  { top: "76%", left: "55%", size: 20, color: "text-blue-400", delay: "0.6s", duration: "6.2s" },
  { top: "82%", left: "46%", size: 22, color: "text-sky-300", delay: "1.4s", duration: "5.5s" },
  { top: "88%", left: "68%", size: 22, color: "text-blue-400", delay: "0.6s", duration: "6.4s" },
  { top: "90%", left: "50%", size: 20, color: "text-blue-500", delay: "0.7s", duration: "6.5s" },

  // Right side sparkles
  { top: "18%", left: "80%", size: 26, color: "text-blue-400", delay: "2.0s", duration: "6.8s" },
  { top: "25%", left: "90%", size: 22, color: "text-indigo-400", delay: "1.4s", duration: "5.8s" },
  { top: "32%", left: "93%", size: 30, color: "text-blue-300", delay: "1.5s", duration: "7.5s" },
  { top: "45%", left: "95%", size: 18, color: "text-sky-300", delay: "1.1s", duration: "6.8s" },
  { top: "75%", left: "85%", size: 20, color: "text-indigo-300", delay: "1.8s", duration: "6.6s" },
  { top: "78%", left: "75%", size: 18, color: "text-blue-400", delay: "1.4s", duration: "5.2s" },
  { top: "82%", left: "91%", size: 28, color: "text-blue-300", delay: "2.2s", duration: "8.2s" },
  { top: "96%", left: "84%", size: 24, color: "text-blue-400", delay: "2.1s", duration: "7.0s" },
];

/* ─────────────────────────────────────────────────────────────────
   Project type definition
───────────────────────────────────────────────────────────────── */
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  tagColors: string[];
  github: string;
  demo: string;
  cable: number;  // 0 = upper cable, 1 = lower cable
  idx: number;    // index position on its cable (0 to 3)
  threadLen: number;
  swayDuration: number;
  swayDelay: number;
}

/* ─────────────────────────────────────────────────────────────────
   6 projects total (3 on each cable, alternating)
───────────────────────────────────────────────────────────────── */
const projects: Project[] = [
  {
    id: 1,
    title: "Gums N Teeth",
    description: "A modern dental clinic platform featuring interactive 3D card deck animations, service catalog, before/after results gallery, Google reviews marquee, and appointment booking.",
    image: "/images/gums-n-teeth.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "Motion"],
    tagColors: ["bg-cyan-200", "bg-blue-200", "bg-emerald-200", "bg-purple-200"],
    github: "https://github.com/selotechaitanya-svg/Gums-N-Teethv1",
    demo: "https://gums-n-teethv1.vercel.app",
    cable: 0,
    idx: 0,
    threadLen: 95,
    swayDuration: 5.8,
    swayDelay: 0,
  },
  {
    id: 2,
    title: "Infinity Scroll Animation",
    description: "An infinite scroll animation showcase featuring seamless loop dynamics, smooth interactive card transitions, and photography exhibition visual effects.",
    image: "/images/infinity-scroll.png",
    tags: ["React", "Tailwind CSS", "Motion", "Animation"],
    tagColors: ["bg-purple-200", "bg-pink-200", "bg-cyan-200", "bg-amber-200"],
    github: "https://github.com/selotechaitanya-svg/infinity-scroll-animation",
    demo: "https://infinity-scroll-animation.vercel.app/",
    cable: 0,
    idx: 1,
    threadLen: 105,
    swayDuration: 6.4,
    swayDelay: 1.1,
  },
  {
    id: 3,
    title: "Scroll Rotation Effect",
    description: "An interactive WebGL 3D scroll rotation showcase featuring dynamic perspective transforms, smooth distortion effects, and responsive visual storytelling.",
    image: "/images/scroll-rotation-effect.png",
    tags: ["WebGL", "JavaScript", "CSS3", "Animation"],
    tagColors: ["bg-yellow-200", "bg-purple-200", "bg-emerald-200", "bg-cyan-200"],
    github: "https://github.com/selotechaitanya-svg/scroll-rotation-effect-master",
    demo: "",
    cable: 0,
    idx: 2,
    threadLen: 95,
    swayDuration: 5.2,
    swayDelay: 2.3,
  },
  {
    id: 4,
    title: "Personal Expense Tracker",
    description: "A full-stack personal finance application with a FastAPI backend and SpendWise dashboard featuring real-time category spending analytics, monthly explorer, and multi-currency tracking.",
    image: "/images/spendwise.png",
    tags: ["FastAPI", "Python", "SQLAlchemy", "Pydantic"],
    tagColors: ["bg-emerald-200", "bg-cyan-200", "bg-yellow-200", "bg-purple-200"],
    github: "https://github.com/selotechaitanya-svg/Personal-Expense-Tracker",
    demo: "https://personal-expense-tracker-9id4.onrender.com/",
    cable: 1,
    idx: 0,
    threadLen: 90,
    swayDuration: 6.1,
    swayDelay: 1.9,
  },
  {
    id: 5,
    title: "GDG RBU EventHub",
    description: "A production-grade event discovery and registration platform built for GDG On Campus RBU featuring custom OTP/JWT auth, QR admission passes, event CRUD, and a Neo-Brutalist interface.",
    image: "/images/gdg-eventhub.png",
    tags: ["React 19", "Express.js", "Node.js", "MongoDB"],
    tagColors: ["bg-blue-200", "bg-emerald-200", "bg-yellow-200", "bg-pink-200"],
    github: "https://github.com/selotechaitanya-svg/gdgback",
    demo: "https://gdgback.vercel.app/",
    cable: 1,
    idx: 1,
    threadLen: 105,
    swayDuration: 5.9,
    swayDelay: 2.8,
  },
  {
    id: 8,
    title: "More to Come",
    description: "I am constantly designing and coding new projects. Follow my GitHub profile to stay updated with my latest full-stack repositories!",
    image: "/images/bolt.png",
    tags: ["Next.js", "AI", "More"],
    tagColors: ["bg-cyan-200", "bg-indigo-200", "bg-sky-200"],
    github: "https://github.com/selotechaitanya-svg",
    demo: "#",
    cable: 1,
    idx: 2,
    threadLen: 95,
    swayDuration: 6.7,
    swayDelay: 0.3,
  },
];

/* ─────────────────────────────────────────────────────────────────
   Project Placeholder & Icon Utilities for Cards Without Images
───────────────────────────────────────────────────────────────── */
function getProjectIcon(id: number) {
  switch (id) {
    case 1:
      return (
        <svg className="w-6 h-6 stroke-black fill-none" strokeWidth={2.5} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 2C8.5 2 6 4.5 6 8c0 3.5 1 6.5 2 10 0.5 2 2 4 4 4s3.5-2 4-4c1-3.5 2-6.5 2-10 0-3.5-2.5-6-6-6z" />
          <path d="M9 12c1.5 1 4.5 1 6 0" />
        </svg>
      );
    case 2:
      return (
        <svg className="w-6 h-6 stroke-black fill-none" strokeWidth={2.5} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
      );
    case 3:
      return (
        <svg className="w-6 h-6 stroke-black fill-none" strokeWidth={2.5} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="4 17 10 11 4 5" />
          <line x1="12" y1="19" x2="20" y2="19" />
        </svg>
      );
    case 4:
      return (
        <svg className="w-6 h-6 stroke-black fill-none" strokeWidth={2.5} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <line x1="2" y1="10" x2="22" y2="10" />
        </svg>
      );
    case 5:
      return (
        <svg className="w-6 h-6 stroke-black fill-none" strokeWidth={2.5} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      );
    case 6:
      return (
        <svg className="w-6 h-6 stroke-black fill-none" strokeWidth={2.5} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="5 9 2 12 5 15" />
          <polyline points="9 5 12 2 15 5" />
          <polyline points="15 19 12 22 9 19" />
          <polyline points="19 9 22 12 19 15" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <line x1="12" y1="2" x2="12" y2="22" />
        </svg>
      );
    case 7:
      return (
        <svg className="w-6 h-6 stroke-black fill-none" strokeWidth={2.5} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="9 11 12 14 22 4" />
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </svg>
      );
    default:
      return (
        <svg className="w-6 h-6 stroke-black fill-yellow-300" strokeWidth={2.5} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
  }
}

function ProjectPlaceholder({ project, inModal = false }: { project: Project; inModal?: boolean }) {
  const icon = getProjectIcon(project.id);
  const bgColor = project.tagColors[0] || "bg-yellow-200";

  return (
    <div className={`w-full h-full ${bgColor} flex flex-col items-center justify-center p-3 select-none relative overflow-hidden`}>
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none" 
        style={{
          backgroundImage: "radial-gradient(#000 1.5px, transparent 1.5px)",
          backgroundSize: "12px 12px"
        }} 
      />
      
      <div className="absolute top-2 left-2 z-10 bg-white border-2 border-black px-1.5 py-0.5 text-[9px] font-mono font-black uppercase shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]">
        {project.tags[0] || "PROJECT"}
      </div>

      <div className={`relative z-10 ${inModal ? "w-16 h-16" : "w-12 h-12"} bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center mb-1.5 rotate-[-2deg] transition-transform group-hover:rotate-0`}>
        {icon}
      </div>

      <div className="relative z-10 font-mono font-black text-[10px] uppercase tracking-wider text-black bg-black/10 px-2 py-0.5 rounded-xs">
        ✦ Preview ✦
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   Quadratic Bezier Math
───────────────────────────────────────────────────────────────── */
type Pt = { x: number; y: number };
function qBez(p0: Pt, p1: Pt, p2: Pt, t: number): Pt {
  const m = 1 - t;
  return {
    x: m * m * p0.x + 2 * m * t * p1.x + t * t * p2.x,
    y: m * m * p0.y + 2 * m * t * p1.y + t * t * p2.y,
  };
}

const CARD_W = 230; // width of each card in px

/* ─────────────────────────────────────────────────────────────────
   Project Card Component (Simplified to show only photo, name, desc)
───────────────────────────────────────────────────────────────── */
function PhotoCard({
  project: p,
  cardLeft,
  cardTop,
  onClick,
  setIsDraggingParent,
}: {
  project: Project;
  cardLeft: number;
  cardTop: number;
  onClick: () => void;
  setIsDraggingParent: (dragging: boolean) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imgError, setImgError] = useState(false);

  // Position refs to avoid stale closure issues during physics animation
  const offsetRef = useRef({ x: 0, y: 0 });
  const dragStartPos = useRef({ x: 0, y: 0 });
  const dragStartOffset = useRef({ x: 0, y: 0 });
  const touchActiveRef = useRef(false);
  const hasDraggedRef = useRef(false);
  const animationRef = useRef<number | null>(null);

  // Velocity tracking for throwing physics
  const historyRef = useRef<{ x: number; y: number; time: number }[]>([]);

  const recordMove = (clientX: number, clientY: number) => {
    const now = performance.now();
    historyRef.current.push({ x: clientX, y: clientY, time: now });
    // Keep only last 80ms of moves
    while (historyRef.current.length > 2 && now - historyRef.current[0].time > 100) {
      historyRef.current.shift();
    }
  };

  const getThrowVelocity = () => {
    const h = historyRef.current;
    if (h.length < 2) return { vx: 0, vy: 0 };
    const now = h[h.length - 1];
    const past = h[0];
    const dt = Math.max(16, now.time - past.time);
    // Convert to px per ~16.6ms animation frame
    const rawVx = ((now.x - past.x) / dt) * 16.6;
    const rawVy = ((now.y - past.y) / dt) * 16.6;
    // Cap maximum throw speed for a delightfully elastic response
    const MAX_SPEED = 32;
    const speed = Math.hypot(rawVx, rawVy);
    if (speed > MAX_SPEED) {
      return {
        vx: (rawVx / speed) * MAX_SPEED,
        vy: (rawVy / speed) * MAX_SPEED,
      };
    }
    return { vx: rawVx, vy: rawVy };
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return; // Left click only
    const target = e.target as HTMLElement;
    if (target.closest("button") || target.closest("a")) return;

    e.preventDefault();
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
    hasDraggedRef.current = false;
    touchActiveRef.current = true;
    setIsTransitioning(true);
    setIsDragging(true);
    setIsInteracting(true);
    setIsDraggingParent(true);

    dragStartPos.current = { x: e.clientX, y: e.clientY };
    dragStartOffset.current = { x: offsetRef.current.x, y: offsetRef.current.y };
    historyRef.current = [{ x: e.clientX, y: e.clientY, time: performance.now() }];
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest("button") || target.closest("a")) return;

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
    hasDraggedRef.current = false;

    if (e.touches.length > 0) {
      const touch = e.touches[0];
      touchActiveRef.current = true;
      setIsInteracting(true);
      dragStartPos.current = { x: touch.clientX, y: touch.clientY };
      dragStartOffset.current = { x: offsetRef.current.x, y: offsetRef.current.y };
      historyRef.current = [{ x: touch.clientX, y: touch.clientY, time: performance.now() }];
    }
  };

  const updateCardPosition = useCallback(
    (clientX: number, clientY: number) => {
      recordMove(clientX, clientY);

      const deltaX = clientX - dragStartPos.current.x;
      const deltaY = clientY - dragStartPos.current.y;

      const newOffsetX = dragStartOffset.current.x + deltaX;
      const newOffsetY = dragStartOffset.current.y + deltaY;

      const dist = Math.sqrt(newOffsetX * newOffsetX + newOffsetY * newOffsetY);
      const MAX_DRAG = 450;
      let clampedX = newOffsetX;
      let clampedY = newOffsetY;

      if (dist > MAX_DRAG) {
        clampedX = (newOffsetX / dist) * MAX_DRAG;
        clampedY = (newOffsetY / dist) * MAX_DRAG;
      }

      offsetRef.current = { x: clampedX, y: clampedY };
      setOffsetX(clampedX);
      setOffsetY(clampedY);

      // Angle matches the stretched thread line
      const angle = Math.atan2(clampedX, p.threadLen + clampedY) * (180 / Math.PI);
      setRotation(angle);
    },
    [p.threadLen]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      if (Math.hypot(e.clientX - dragStartPos.current.x, e.clientY - dragStartPos.current.y) > 5) {
        hasDraggedRef.current = true;
      }
      updateCardPosition(e.clientX, e.clientY);
    },
    [isDragging, updateCardPosition]
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!touchActiveRef.current || e.touches.length === 0) return;
      const touch = e.touches[0];
      const deltaX = touch.clientX - dragStartPos.current.x;
      const deltaY = touch.clientY - dragStartPos.current.y;
      const dist = Math.hypot(deltaX, deltaY);

      // Engage dragging on mobile when movement exceeds threshold in ANY direction (including pulling downwards)
      if (!isDragging) {
        if (dist > 6) {
          setIsTransitioning(true);
          setIsDragging(true);
          setIsDraggingParent(true);
          hasDraggedRef.current = true;
        } else {
          return;
        }
      }

      // Prevent native viewport scrolling while pulling/dragging the card
      if (e.cancelable) {
        e.preventDefault();
      }

      updateCardPosition(touch.clientX, touch.clientY);
    },
    [isDragging, setIsDraggingParent, updateCardPosition]
  );

  const handleRelease = useCallback(() => {
    touchActiveRef.current = false;
    setIsInteracting(false);

    if (!isDragging) return;
    setIsDragging(false);

    // Get inertia velocity from throw/flick gesture
    const { vx, vy } = getThrowVelocity();
    let currentOffsetX = offsetRef.current.x;
    let currentOffsetY = offsetRef.current.y;
    let velX = vx;
    let velY = vy;
    const stiffness = 0.085; // spring coefficient for elastic bounce
    const damping = 0.88;    // friction/decay damping factor

    const step = () => {
      const forceX = -stiffness * currentOffsetX;
      const forceY = -stiffness * currentOffsetY;

      velX = (velX + forceX) * damping;
      velY = (velY + forceY) * damping;

      currentOffsetX += velX;
      currentOffsetY += velY;

      offsetRef.current = { x: currentOffsetX, y: currentOffsetY };
      setOffsetX(currentOffsetX);
      setOffsetY(currentOffsetY);

      const angle = Math.atan2(currentOffsetX, p.threadLen + currentOffsetY) * (180 / Math.PI);
      setRotation(angle);

      // Check if both position and velocity have settled
      if (
        Math.abs(currentOffsetX) > 0.08 ||
        Math.abs(currentOffsetY) > 0.08 ||
        Math.abs(velX) > 0.01 ||
        Math.abs(velY) > 0.01
      ) {
        animationRef.current = requestAnimationFrame(step);
      } else {
        offsetRef.current = { x: 0, y: 0 };
        setOffsetX(0);
        setOffsetY(0);
        setRotation(0);
        setIsTransitioning(false);
        setIsDraggingParent(false);
        animationRef.current = null;
      }
    };

    animationRef.current = requestAnimationFrame(step);
  }, [isDragging, p.threadLen, setIsDraggingParent]);

  // Dynamic window listeners attached ONLY during interaction
  useEffect(() => {
    if (isInteracting || isDragging) {
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
      window.addEventListener("touchend", handleRelease);
      window.addEventListener("touchcancel", handleRelease);
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleRelease);
    }
    return () => {
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleRelease);
      window.removeEventListener("touchcancel", handleRelease);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleRelease);
    };
  }, [isInteracting, isDragging, handleTouchMove, handleMouseMove, handleRelease]);

  const showSwayAnimation = !isDragging && !isTransitioning;

  return (
    <div
      ref={cardRef}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      className={`hanging-card-${p.id} hanging-card absolute select-none group touch-none ${
        isDragging ? "cursor-grabbing" : "cursor-grab"
      }`}
      style={{
        left: cardLeft + offsetX,
        top: cardTop + offsetY,
        width: CARD_W,
        animation: showSwayAnimation
          ? `sway-${p.id} ${p.swayDuration}s ease-in-out ${p.swayDelay}s infinite`
          : "none",
        transformOrigin: "50% 0px",
        willChange: "transform",
        zIndex: isDragging ? 50 : 20,
        touchAction: "none",
      }}
    >
      {/* Thread line (string) SVG local to the card, stretching dynamically to anchor point */}
      <svg
        className="absolute top-0 left-0 pointer-events-none"
        width={CARD_W}
        height={p.threadLen + Math.max(0, offsetY)}
        style={{ overflow: "visible" }}
        aria-hidden="true"
      >
        <line
          x1={CARD_W / 2 - offsetX}
          y1={-offsetY}
          x2={CARD_W / 2}
          y2={p.threadLen}
          stroke="#111111"
          strokeWidth={1.75}
          strokeLinecap="round"
        />
      </svg>

      {/* Card container rotated around the clothes-pin attach point */}
      <div
        className="relative w-full"
        style={{
          transform: `rotate(${rotation}deg)`,
          transformOrigin: `${CARD_W / 2}px ${p.threadLen}px`,
          willChange: "transform",
        }}
      >
        <article
          className="
            relative
            bg-white border-4 border-black p-4
            shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
            group-hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]
            group-hover:-translate-y-[4px] group-hover:scale-[1.03]
            transition-[box-shadow,transform] duration-300 ease-out
            focus-within:ring-2 focus-within:ring-black
            select-none
            cursor-pointer
          "
          style={{ marginTop: `${p.threadLen}px` }}
          onClick={() => {
            if (!hasDraggedRef.current) {
              onClick();
            }
          }}
        >
          {/* Wooden Photo Clip / Clothes-pin details */}
          <div 
            className="absolute left-1/2 -translate-x-1/2 w-4 h-6 bg-[#D8B48F] border-[2.5px] border-black rounded-[2px] shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] z-30"
            style={{ top: "-14px" }}
          />
          <div 
            className="absolute left-1/2 -translate-x-1/2 w-4 h-1 bg-[#A8A29E] border-y-[1px] border-black z-30"
            style={{ top: "-6px" }}
          />

          {/* Photo Container with black border and offset spacing */}
          <div className="relative w-full border-4 border-black mb-3 overflow-hidden bg-gray-100" style={{ aspectRatio: "4/3" }}>
            {p.image && !imgError ? (
              <Image
                src={p.image}
                alt={`Screenshot of ${p.title}`}
                fill
                className="object-cover pointer-events-none"
                sizes="230px"
                draggable={false}
                onError={() => setImgError(true)}
              />
            ) : (
              <ProjectPlaceholder project={p} />
            )}
          </div>

          {/* Polaroid frame bottom info area (Name & Desc & Action buttons) */}
          <div className="bg-white flex items-end justify-between gap-2">
            <div className="flex-1 min-w-0">
              <h3 className="font-black text-black uppercase text-sm tracking-tight leading-none mb-1.5 truncate">
                {p.title}
              </h3>
              <p className="font-mono text-[9px] text-gray-600 leading-relaxed line-clamp-2">
                {p.description}
              </p>
            </div>
            {/* Action buttons: direct GitHub repo link & details modal toggle */}
            <div className="flex items-center gap-1.5 flex-shrink-0">
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onTouchStart={(e) => e.stopPropagation()}
                  onMouseDown={(e) => e.stopPropagation()}
                  onClick={(e) => e.stopPropagation()}
                  className="bg-white hover:bg-black hover:text-white text-black border-2 border-black w-8 h-8 flex items-center justify-center font-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[0.5px] hover:translate-y-[0.5px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1.5px] active:translate-y-[1.5px] active:shadow-none transition-all flex-shrink-0 cursor-pointer"
                  title="View GitHub Repository"
                  aria-label={`${p.title} GitHub repository`}
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
              )}
              {/* Neobrutalist Arrow Button to open details */}
              <button
                onTouchStart={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onClick={(e) => {
                  e.stopPropagation();
                  onClick();
                }}
                className="bg-amber-100 hover:bg-amber-200 text-black border-2 border-black w-8 h-8 flex items-center justify-center font-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[0.5px] hover:translate-y-[0.5px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1.5px] active:translate-y-[1.5px] active:shadow-none transition-all flex-shrink-0 cursor-pointer text-sm"
                aria-label="Open project details"
                title="View details"
              >
                ➔
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}


/* ─────────────────────────────────────────────────────────────────
   Main Component
───────────────────────────────────────────────────────────────── */
export default function ProjectsHanging() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  const [W, setW] = useState(1200); // Dynamic viewport width
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [modalImgError, setModalImgError] = useState(false);
  const [someCardIsDragging, setSomeCardIsDragging] = useState(false);
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  const handleResize = useCallback((entries: ResizeObserverEntry[]) => {
    const w = entries[0]?.contentRect.width;
    if (w) setW(w);
  }, []);

  useEffect(() => {
    if (!scrollWrapperRef.current) return;
    const ro = new ResizeObserver(handleResize);
    ro.observe(scrollWrapperRef.current);
    const initialWidth = scrollWrapperRef.current.getBoundingClientRect().width || 1200;
    setW(initialWidth);
    return () => ro.disconnect();
  }, [handleResize]);

  const isMobile = W < 768;
  const isTablet = W >= 768 && W < 1024;
  const isDesktop = W >= 1024;

  // Dynamic horizontal sagging cables for each project card with alternating tilts
  const cables = useMemo(() => {
    if (isDesktop) {
      // Desktop: 2 main cables + 2 background fainted cables
      return {
        mains: [
          { p0: { x: 0, y: 90 },  p1: { x: W * 0.50, y: 120 }, p2: { x: W, y: 20 } },
          { p0: { x: 0, y: 450 }, p1: { x: W * 0.50, y: 650 }, p2: { x: W, y: 680 } },
        ],
        bgs: [
          { p0: { x: 0, y: 30 },  p1: { x: W * 0.50, y: 220 }, p2: { x: W, y: 300 } },
          { p0: { x: 0, y: 620 }, p1: { x: W * 0.50, y: 550 }, p2: { x: W, y: 410 } },
        ]
      };
    } else if (isTablet) {
      // Tablet: 3 cables vertically, each holding 2 projects
      const mains = [];
      const bgs = [];
      const numCables = Math.ceil(projects.length / 2);
      for (let j = 0; j < numCables; j++) {
        const baseY = j * 450 + 80;
        const isEven = j % 2 === 0;
        mains.push({
          p0: { x: 0,        y: isEven ? baseY - 20 : baseY + 45 },
          p1: { x: W * 0.50, y: baseY + 75 },
          p2: { x: W,        y: isEven ? baseY + 45 : baseY - 20 },
        });
        bgs.push({
          p0: { x: 0,        y: isEven ? baseY + 35 : baseY - 15 },
          p1: { x: W * 0.50, y: baseY + 85 },
          p2: { x: W,        y: isEven ? baseY - 15 : baseY + 35 },
        });
      }
      return { mains, bgs };
    } else {
      // Mobile: cables vertically, each holding 1 project card
      const mains = [];
      const bgs = [];
      for (let j = 0; j < projects.length; j++) {
        const baseY = j * 450 + 80;
        const isEven = j % 2 === 0;
        mains.push({
          p0: { x: 0,        y: isEven ? baseY - 30 : baseY + 50 },
          p1: { x: W * 0.50, y: baseY + 80 },
          p2: { x: W,        y: isEven ? baseY + 50 : baseY - 30 },
        });
        bgs.push({
          p0: { x: 0,        y: isEven ? baseY + 40 : baseY - 20 },
          p1: { x: W * 0.50, y: baseY + 90 },
          p2: { x: W,        y: isEven ? baseY - 20 : baseY + 40 },
        });
      }
      return { mains, bgs };
    }
  }, [W, isDesktop, isTablet]);

  // Intermediate fainted background strings between each project level (Mobile only)
  const intermediateCables = useMemo(() => {
    if (!isMobile) return [];
    const list = [];
    for (let i = 0; i < projects.length - 1; i++) {
      const midY = i * 450 + 80 + 450 / 2;
      const isEven = i % 2 === 0;
      list.push({
        p0: { x: 0,        y: isEven ? midY - 100 : midY + 110 },
        p1: { x: W * 0.50, y: midY + 120 },
        p2: { x: W,        y: isEven ? midY + 110 : midY - 100 },
      });
    }
    return list;
  }, [W, isMobile]);

  // Center exactly 1 project card per cable string (at t = 0.5)
  const layoutData = useMemo(() => {
    return projects.map((p, i) => {
      let cableIdx = 0;
      let cardLeft = 0;
      let t = 0.5;

      if (isDesktop) {
        cableIdx = i < 3 ? 0 : 1;
        const idxInCable = i % 3;
        const gap = Math.max(16, (W - 3 * CARD_W) / 4);
        cardLeft = (idxInCable + 1) * gap + idxInCable * CARD_W;
        t = (cardLeft + CARD_W / 2) / W;
      } else if (isTablet) {
        cableIdx = Math.floor(i / 2);
        const idxInCable = i % 2;
        const gap = Math.max(12, (W - 2 * CARD_W) / 3);
        cardLeft = (idxInCable + 1) * gap + idxInCable * CARD_W;
        t = (cardLeft + CARD_W / 2) / W;
      } else {
        cableIdx = i;
        cardLeft = W * 0.5 - CARD_W / 2;
        t = 0.5;
      }

      const c = cables.mains[cableIdx];
      const anchor = qBez(c.p0, c.p1, c.p2, t);

      return {
        project: p,
        cardLeft,
        cardTop: anchor.y,
        anchorX: anchor.x,
        anchorY: anchor.y,
        cardCenterX: cardLeft + CARD_W / 2,
        cableIndex: cableIdx,
      };
    });
  }, [W, cables, isDesktop, isTablet]);

  // Accent items hanging on alternate cables
  const decorativeItems = useMemo(() => {
    const items = isDesktop 
      ? [
          { id: "dec-1", cableIdx: 0, t: 0.08, threadLen: 50, label: "✦", bg: "bg-yellow-300", size: 36 },
          { id: "dec-2", cableIdx: 0, t: 0.92, threadLen: 65, label: "✦", bg: "bg-blue-300", size: 36 },
          { id: "dec-3", cableIdx: 1, t: 0.06, threadLen: 60, label: "★", bg: "bg-cyan-300", size: 36 },
          { id: "dec-4", cableIdx: 1, t: 0.94, threadLen: 55, label: "⚡", bg: "bg-sky-300", size: 36 },
        ]
      : isTablet
        ? [
            { id: "dec-1", cableIdx: 0, t: 0.08, threadLen: 50, label: "✦", bg: "bg-yellow-300", size: 32 },
            { id: "dec-2", cableIdx: 1, t: 0.92, threadLen: 65, label: "✦", bg: "bg-blue-300", size: 32 },
            { id: "dec-3", cableIdx: 2, t: 0.08, threadLen: 60, label: "★", bg: "bg-cyan-300", size: 32 },
          ]
        : [
            { id: "dec-1", cableIdx: 0, t: 0.07, threadLen: 42, label: "✦", bg: "bg-yellow-300", size: 28 },
            { id: "dec-2", cableIdx: Math.min(2, projects.length - 1), t: 0.93, threadLen: 52, label: "✦", bg: "bg-blue-300", size: 28 },
            { id: "dec-3", cableIdx: Math.min(4, projects.length - 1), t: 0.07, threadLen: 46, label: "★", bg: "bg-cyan-300", size: 28 },
          ];

    return items.map((item) => {
      const c = cables.mains[item.cableIdx];
      const anchor = qBez(c.p0, c.p1, c.p2, item.t);
      const cardLeft = anchor.x - item.size / 2;
      return {
        ...item,
        cardLeft,
        cardTop: anchor.y,
        anchorX: anchor.x,
        anchorY: anchor.y,
      };
    });
  }, [cables, isDesktop, isTablet]);

  // Determine section height dynamically - tightened to reduce vertical gap below projects
  const canvasH = Math.max(
    ...layoutData.map((d) => d.cardTop + d.project.threadLen + 275),
    700
  ) + 10;

  return (
    <section
      id="projects"
      className={`relative w-full bg-[#FFFBEF] border-t-4 border-black overflow-x-clip ${activeProject || someCardIsDragging ? "z-30" : "z-10"}`}
      aria-label="Projects"
    >
      {/* Cute Sparkles in the background */}
      {projectSparkles.map((sp, idx) => (
        <div
          key={`project-sparkle-${idx}`}
          className="absolute pointer-events-none animate-sparkle"
          style={{
            top: sp.top,
            left: sp.left,
            width: sp.size,
            height: sp.size,
            zIndex: 5,
            "--sparkle-delay": sp.delay,
            "--sparkle-duration": sp.duration,
          } as React.CSSProperties}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className={`w-full h-full ${sp.color} filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]`}>
            <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4Z" />
          </svg>
        </div>
      ))}
      {/* Header - Always visible with clean z-index and spacing */}
      <div className="pt-12 sm:pt-16 pb-6 sm:pb-8 text-center px-4 sm:px-6 relative z-20">
        <span className="inline-block bg-yellow-300 text-black font-mono font-black text-xs md:text-sm px-3.5 py-1.5 border-2 border-black uppercase tracking-wider shadow-[2.5px_2.5px_0px_0px_rgba(0,0,0,1)] mb-4">
          My Portfolio
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-black uppercase tracking-tight leading-none">
          Projects
        </h2>
        <p className="font-mono text-xs text-gray-500 mt-2 tracking-wide">✦ try dragging a project ✦</p>
      </div>

      {/* Hanging Gallery canvas container - flows vertically naturally with no horizontal scroll needed */}
      <div ref={scrollWrapperRef} className="w-full relative py-4 select-none overflow-x-clip">
        <div
          ref={containerRef}
          className="relative w-full"
          style={{
            height: `${canvasH}px`,
          }}
        >
          {/* Cables SVG */}
          <svg
            className="absolute inset-0 pointer-events-none"
            width={W}
            height={canvasH}
            style={{ overflow: "hidden" }}
            aria-hidden="true"
          >
            {/* Intermediate Background Wires (only visible on mobile) */}
            {intermediateCables.map((c, i) => {
              const pathBg = `M ${c.p0.x},${c.p0.y} Q ${c.p1.x},${c.p1.y} ${c.p2.x},${c.p2.y}`;
              return (
                <g key={`mid-cable-${i}`}>
                  <path d={pathBg} fill="none" stroke="#111111" strokeWidth={2.5} opacity={0.2} strokeLinecap="round" />
                  <circle cx={c.p0.x} cy={c.p0.y} r={3} fill="#111111" opacity={0.25} />
                  <circle cx={c.p2.x} cy={c.p2.y} r={3} fill="#111111" opacity={0.25} />
                </g>
              );
            })}

            {/* Background Wires (Fainted) */}
            {cables.bgs.map((c, i) => {
              const pathBg = `M ${c.p0.x},${c.p0.y} Q ${c.p1.x},${c.p1.y} ${c.p2.x},${c.p2.y}`;
              return (
                <g key={`bg-cable-grp-${i}`}>
                  <path d={pathBg} fill="none" stroke="#111111" strokeWidth={2.5} opacity={0.2} strokeLinecap="round" />
                  <circle cx={c.p0.x} cy={c.p0.y} r={3.5} fill="#111111" opacity={0.25} />
                  <circle cx={c.p2.x} cy={c.p2.y} r={3.5} fill="#111111" opacity={0.25} />
                </g>
              );
            })}

            {/* Main Cables */}
            {cables.mains.map((c, i) => {
              const pathMain = `M ${c.p0.x},${c.p0.y} Q ${c.p1.x},${c.p1.y} ${c.p2.x},${c.p2.y}`;

              return (
                <g key={`main-cable-grp-${i}`}>
                  <path d={pathMain} fill="none" stroke="#111111" strokeWidth={4.5} strokeLinecap="round" />
                  <circle cx={c.p0.x} cy={c.p0.y} r={5} fill="#111111" />
                  <circle cx={c.p2.x} cy={c.p2.y} r={5} fill="#111111" />
                </g>
              );
            })}

            {/* Hangers / Hook Dots on Cable */}
            {layoutData.map((d, i) => (
              <circle key={`hang-${i}`} cx={d.anchorX} cy={d.anchorY} r={4.5} fill="#111111" />
            ))}

            {/* Hangers for decorations */}
            {decorativeItems.map((d) => (
              <circle key={`hang-${d.id}`} cx={d.anchorX} cy={d.anchorY} r={3.5} fill="#111111" />
            ))}
          </svg>

          {/* Hanging Decorations */}
          {decorativeItems.map((d, i) => {
            const swayDurations = [5.8, 6.4, 5.2, 7.0];
            const swayDelays = [0, 1.1, 2.3, 0.7];
            const swayIdx = (i % 4) + 1; // sway-1 to sway-4
            
            return (
              <div
                key={d.id}
                className="absolute pointer-events-none"
                style={{
                  left: d.cardLeft,
                  top: d.cardTop,
                  width: d.size,
                  transformOrigin: "50% 0px",
                  animation: `sway-${swayIdx} ${swayDurations[i % 4]}s ease-in-out ${swayDelays[i % 4]}s infinite`,
                  willChange: "transform",
                  zIndex: 15,
                }}
              >
              {/* String */}
              <svg
                className="absolute top-0 left-0"
                width={d.size}
                height={d.threadLen}
                style={{ overflow: "visible" }}
              >
                <line
                  x1={d.size / 2}
                  y1={0}
                  x2={d.size / 2}
                  y2={d.threadLen}
                  stroke="#111111"
                  strokeWidth={1.5}
                />
              </svg>

              {/* Clip & Badge container */}
              <div style={{ marginTop: `${d.threadLen}px` }} className="relative">
                {/* Tiny wooden clip */}
                <div 
                  className="absolute left-1/2 -translate-x-1/2 w-2.5 h-4.5 bg-[#D8B48F] border-[1.5px] border-black rounded-[1px] shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] z-30"
                  style={{ top: "-9px" }}
                />
                
                {/* Small Neobrutalist Badge */}
                <div
                  style={{ width: `${d.size}px`, height: `${d.size}px`, fontSize: d.size < 32 ? "12px" : "16px" }}
                  className={`${d.bg} border-2 sm:border-3 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center font-mono font-black text-black select-none rotate-[-3deg]`}
                >
                  {d.label}
                </div>
              </div>
            </div>
          );
        })}

          {/* Hanging Cards */}
          {layoutData.map((d) => (
            <PhotoCard
              key={d.project.id}
              project={d.project}
              cardLeft={d.cardLeft}
              cardTop={d.cardTop}
              onClick={() => {
                setModalImgError(false);
                setActiveProject(d.project);
              }}
              setIsDraggingParent={setSomeCardIsDragging}
            />
          ))}
        </div>
      </div>

      {/* Details Popup Modal */}
      {mounted && activeProject && createPortal(
        <div
          className="fixed inset-0 bg-black/60 z-[999] flex items-center justify-center p-3 sm:p-4 backdrop-blur-sm"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="bg-white border-4 border-black p-4 sm:p-6 md:p-8 max-w-xl w-full shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] relative max-h-[90vh] overflow-y-auto"
            style={{ borderRadius: "2px" }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Modal Window Top Header Bar */}
            <div className="flex items-center justify-between pb-3 sm:pb-3.5 mb-3 sm:mb-4 border-b-2 border-black">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-400 border border-black inline-block" />
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-300 border border-black inline-block" />
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-400 border border-black inline-block" />
                <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-700 ml-1.5">
                  Project Preview
                </span>
              </div>
              <button
                onClick={() => setActiveProject(null)}
                className="bg-red-400 hover:bg-red-500 text-black font-black w-7 h-7 sm:w-8 sm:h-8 border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all text-xs sm:text-sm cursor-pointer"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {/* Project Image Frame */}
            <div className="relative w-full border-3 sm:border-4 border-black mb-3.5 sm:mb-4 overflow-hidden bg-gray-100 aspect-video">
              {activeProject.image && !modalImgError ? (
                <Image
                  src={activeProject.image}
                  alt={activeProject.title}
                  fill
                  className="object-cover"
                  onError={() => setModalImgError(true)}
                />
              ) : (
                <ProjectPlaceholder project={activeProject} inModal />
              )}
            </div>

            {/* Project Title */}
            <h3 id="modal-title" className="font-black text-black uppercase text-xl sm:text-2xl tracking-tight leading-none mb-2 pr-6 sm:pr-0">
              {activeProject.title}
            </h3>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3.5 sm:mb-4">
              {activeProject.tags.map((tag, idx) => (
                <span
                  key={tag}
                  className={`${activeProject.tagColors[idx]} text-black border-2 border-black px-2 sm:px-2.5 py-0.5 font-mono text-[11px] sm:text-xs font-bold shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] sm:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Project Description */}
            <p className="font-mono text-xs sm:text-sm text-gray-700 leading-relaxed mb-4 sm:mb-6 border-t-2 border-dashed border-black pt-3 sm:pt-4">
              {activeProject.description}
            </p>

            {/* External Links */}
            {!activeProject.demo || activeProject.demo === "#" ? (
              <a
                href={activeProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-black text-white border-3 border-black font-black uppercase text-xs md:text-sm py-2.5 sm:py-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current inline-block" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>GitHub Repository</span>
                <span className="text-base group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
              </a>
            ) : (
              <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-4">
                <a
                  href={activeProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-black text-white border-3 border-black font-black uppercase text-xs md:text-sm py-2 sm:py-2.5 px-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current inline-block" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span>GitHub Repository</span>
                  <span className="text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
                </a>

                {activeProject.demo && activeProject.demo !== "#" ? (
                  <a
                    href={activeProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-[#FFE500] text-black border-3 border-black font-black uppercase text-xs md:text-sm py-2 sm:py-2.5 px-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Live Demo</span>
                    <span className="text-sm">↗</span>
                  </a>
                ) : (
                  <button
                    disabled
                    className="flex-1 text-center bg-gray-200 text-gray-400 border-3 border-gray-400 font-black uppercase text-xs md:text-sm py-2 sm:py-2.5 cursor-not-allowed select-none opacity-60"
                  >
                    Live Demo
                  </button>
                )}
              </div>
            )}
          </div>
        </div>,
        document.body
      )}

      <div className="pb-24" />
    </section>
  );
}
