"use client";

import { useEffect, useRef } from "react";

interface Particle {
  el: HTMLDivElement | null;
  active: boolean;
  x: number;
  y: number;
  vx: number;
  vy: number;
  scale: number;
  life: number;
  colorClass: string;
}

export default function CursorTrail() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lensRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const coords = useRef({ x: -200, y: -200 });
  const poolSize = 24; // Pre-rendered star particles pool

  const isCoolModeRef = useRef(false);
  const isDraggingLensRef = useRef(false);

  useEffect(() => {
    const isTouch = 
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      (typeof (navigator as { msMaxTouchPoints?: number }).msMaxTouchPoints === "number" &&
        ((navigator as { msMaxTouchPoints?: number }).msMaxTouchPoints ?? 0) > 0);
    
    const isDesktop = window.innerWidth >= 768 && !isTouch;

    if (isDesktop) {
      document.body.classList.add("custom-cursor-blue");
    }

    const particles = particlesRef.current;
    let nextParticleIndex = 0;

    const handleToggle = (e: Event) => {
      const customEvent = e as CustomEvent;
      isCoolModeRef.current = customEvent.detail;
      
      // If turning cool mode ON: hide all active star particles immediately
      if (isCoolModeRef.current) {
        particles.forEach((p) => {
          p.active = false;
          if (p.el) {
            p.el.style.opacity = "0";
            p.el.style.transform = "translate(-100px, -100px)";
          }
        });

        // For mobile/tablet: place the lens in the center of the screen initially
        if (!isDesktop && lensRef.current) {
          const centerX = window.innerWidth / 2;
          const centerY = window.innerHeight / 2;
          coords.current.x = centerX;
          coords.current.y = centerY;
          lensRef.current.style.transform = `translate3d(${centerX - 110}px, ${centerY - 110}px, 0)`;
          lensRef.current.style.opacity = "1";
        }
      } else {
        // If turning cool mode OFF: hide the lens immediately
        if (lensRef.current) {
          lensRef.current.style.opacity = "0";
          lensRef.current.style.transform = "translate(-300px, -300px)";
        }
      }
    };

    window.addEventListener("toggle-cool-mode", handleToggle);

    const spawnParticle = (clientX: number, clientY: number) => {
      if (isCoolModeRef.current) return;

      const dx = clientX - lastMousePos.current.x;
      const dy = clientY - lastMousePos.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Spawn a star particle if movement exceeds threshold
      if (dist > 8) {
        lastMousePos.current = { x: clientX, y: clientY };

        const p = particles[nextParticleIndex];
        if (p) {
          p.active = true;
          p.x = clientX;
          p.y = clientY;
          
          p.vx = (Math.random() - 0.5) * 2.2;
          p.vy = (Math.random() - 0.5) * 2.2 - 0.6;
          
          p.scale = 0.5 + Math.random() * 0.7;
          p.life = 1.0;
          
          if (p.el) {
            p.el.style.opacity = "1";
            p.el.style.transform = `translate(${p.x - 12}px, ${p.y - 12}px) scale(${p.scale}) rotate(0deg)`;
          }
        }

        nextParticleIndex = (nextParticleIndex + 1) % poolSize;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      coords.current.x = e.clientX;
      coords.current.y = e.clientY;
      spawnParticle(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Touch event listeners for particles & cool mode lens on mobile/tablets
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 0) return;
      const touch = e.touches[0];
      const touchX = touch.clientX;
      const touchY = touch.clientY;

      if (!isCoolModeRef.current) {
        coords.current.x = touchX;
        coords.current.y = touchY;
        lastMousePos.current = { x: touchX, y: touchY };
        spawnParticle(touchX, touchY);
        return;
      }

      // Cool Mode lens interaction
      const lensX = coords.current.x;
      const lensY = coords.current.y;
      const dx = touchX - lensX;
      const dy = touchY - lensY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist <= 110) {
        isDraggingLensRef.current = true;
        coords.current.x = touchX;
        coords.current.y = touchY;
      } else {
        isDraggingLensRef.current = false;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 0) return;
      const touch = e.touches[0];

      if (!isCoolModeRef.current) {
        coords.current.x = touch.clientX;
        coords.current.y = touch.clientY;
        spawnParticle(touch.clientX, touch.clientY);
        return;
      }

      if (!isDraggingLensRef.current) return;
      e.preventDefault();
      coords.current.x = touch.clientX;
      coords.current.y = touch.clientY;
    };

    const handleTouchEnd = () => {
      isDraggingLensRef.current = false;
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    window.addEventListener("touchcancel", handleTouchEnd, { passive: true });

    let animationFrameId: number;

    const updateParticles = () => {
      const x = coords.current.x;
      const y = coords.current.y;

      // Update Lens Position instantly if cool mode is active
      if (isCoolModeRef.current) {
        if (lensRef.current && x > -100) {
          lensRef.current.style.transform = `translate3d(${x - 110}px, ${y - 110}px, 0)`;
          lensRef.current.style.opacity = "1";
        }
      } else {
        // Otherwise, make sure the lens stays hidden
        if (lensRef.current) {
          lensRef.current.style.opacity = "0";
          lensRef.current.style.transform = "translate(-250px, -250px)";
        }
      }

      // Update particles across all devices
      if (!isCoolModeRef.current) {
        particles.forEach((p) => {
          if (!p.active || !p.el) return;

          p.life -= 0.035;

          if (p.life <= 0) {
            p.active = false;
            p.el.style.opacity = "0";
            p.el.style.transform = "translate(-100px, -100px)";
            return;
          }

          p.x += p.vx;
          p.y += p.vy;

          p.vx *= 0.95;
          p.vy *= 0.95;

          const currentScale = p.scale * p.life;
          const rotateAngle = (1 - p.life) * 90;

          p.el.style.transform = `translate(${p.x - 12}px, ${p.y - 12}px) scale(${currentScale}) rotate(${rotateAngle}deg)`;
          p.el.style.opacity = `${p.life}`;
        });
      }

      animationFrameId = requestAnimationFrame(updateParticles);
    };

    animationFrameId = requestAnimationFrame(updateParticles);

    return () => {
      document.body.classList.remove("custom-cursor-blue");
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("touchcancel", handleTouchEnd);
      window.removeEventListener("toggle-cool-mode", handleToggle);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const neobrutalistColors = [
    "fill-blue-300",
    "fill-cyan-300",
    "fill-yellow-300",
    "fill-emerald-300",
    "fill-sky-300",
    "fill-indigo-300",
  ];

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none"
    >
      {/* Spyglass / Flashlight Dark Lens */}
      <div
        ref={lensRef}
        className="absolute left-0 top-0 rounded-full border-4 border-black shadow-[0_0_0_3px_#3B82F6] pointer-events-none block"
        style={{
          width: "220px",
          height: "220px",
          opacity: 0,
          willChange: "transform, opacity, backdrop-filter",
          transform: "translate3d(-250px, -250px, 0)",
          backfaceVisibility: "hidden",
          backdropFilter: "invert(1) hue-rotate(180deg) contrast(1.15) brightness(0.95)",
          WebkitBackdropFilter: "invert(1) hue-rotate(180deg) contrast(1.15) brightness(0.95)",
          zIndex: 1, // behind the trail elements
        }}
      />

      {/* Trail particles (stars) */}
      {Array.from({ length: poolSize }).map((_, idx) => {
        const colorClass = neobrutalistColors[idx % neobrutalistColors.length];

        return (
          <div
            key={idx}
            ref={(el) => {
              if (el) {
                particlesRef.current[idx] = {
                  el,
                  active: false,
                  x: 0,
                  y: 0,
                  vx: 0,
                  vy: 0,
                  scale: 1,
                  life: 0,
                  colorClass,
                };
              }
            }}
            className="absolute w-6 h-6 pointer-events-none"
            style={{
              opacity: 0,
              willChange: "transform, opacity",
              transform: "translate(-100px, -100px)",
              zIndex: 2, // on top of the lens
            }}
          >
            <svg viewBox="0 0 24 24" className={`w-full h-full ${colorClass}`} aria-hidden="true">
              <path
                d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4Z"
                stroke="#111111"
                strokeWidth={2}
                strokeLinejoin="round"
              />
            </svg>
          </div>
        );
      })}
    </div>
  );
}
