"use client";

import { useState } from "react";

export default function CoolModeToggle() {
  const [coolMode, setCoolMode] = useState(false);

  const handleToggle = () => {
    const nextMode = !coolMode;
    setCoolMode(nextMode);
    // Dispatch a custom event to toggle cool mode globally
    window.dispatchEvent(new CustomEvent("toggle-cool-mode", { detail: nextMode }));
  };

  return (
    <div className="w-full bg-[#FFFBEF] pb-16 px-6 flex flex-col items-center justify-center z-20 relative">
      <button
        onClick={handleToggle}
        className="bg-purple-300 text-black border-4 border-black px-6 py-3 font-mono font-black uppercase text-sm md:text-base shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer select-none"
      >
        {coolMode ? (
          <>
            ✦ Not that cool? ✦
            <br />
            <span className="text-xs font-normal lowercase">(revert back)</span>
          </>
        ) : (
          <>
            ✦ Wanna see something cool? ✦
            <br />
            <span className="text-xs font-normal lowercase">(click here)</span>
          </>
        )}
      </button>
    </div>
  );
}
