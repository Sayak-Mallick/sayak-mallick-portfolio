"use client";

import { useEffect, useState } from "react";

export function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    document.body.classList.add("loading");
    const timer = setTimeout(() => {
      setHidden(true);
      document.body.classList.remove("loading");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (hidden) return null;

  return (
    <div
      className={[
        "fixed inset-0 z-99999 flex flex-col items-center justify-center gap-7",
        "transition-opacity duration-500",
      ].join(" ")}
      style={{ background: "var(--bg)" }}
    >
      {/* Logo */}
      <span
        className="font-extrabold text-[22px] tracking-tight animate-[loaderPulse_1.2s_ease_infinite]"
        style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
      >
        Sayak Mallick<span style={{ color: "var(--accent)" }}>.</span>
      </span>

      {/* Spinner */}
      <div className="relative w-16 h-16">
        {/* Track ring */}
        <span
          className="absolute inset-0 rounded-full border-2"
          style={{ borderColor: "rgba(232,255,71,0.12)" }}
        />
        {/* Spinning arc */}
        <span
          className="absolute inset-0 rounded-full border-2 border-transparent animate-spin"
          style={{
            borderTopColor: "var(--accent)",
            borderRightColor: "rgba(232,255,71,0.4)",
            animationDuration: "0.9s",
            animationTimingFunction: "cubic-bezier(0.6,0.2,0.4,0.9)",
          }}
        />
        {/* Inner dot */}
        <span
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full animate-[dotPulse_0.9s_ease_infinite]"
          style={{
            background: "var(--accent)",
            boxShadow: "0 0 10px var(--accent), 0 0 24px rgba(232,255,71,0.4)",
          }}
        />
      </div>

      {/* Label */}
      <span
        className="text-[10px] tracking-[0.2em] uppercase animate-[loaderPulse_1.2s_ease_infinite]"
        style={{ color: "var(--text-muted)" }}
      >
        Initializing
      </span>

      {/* Progress bar */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5"
        style={{ background: "var(--border)" }}
      >
        <div
          className="h-full animate-[barFill_1.8s_cubic-bezier(0.4,0,0.2,1)_forwards]"
          style={{
            background: "linear-gradient(90deg, var(--accent), var(--accent2))",
          }}
        />
      </div>

      <style>{`
        @keyframes loaderPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes dotPulse {
          0%, 100% { transform: translate(-50%,-50%) scale(1); opacity: 1; }
          50% { transform: translate(-50%,-50%) scale(0.6); opacity: 0.5; }
        }
        @keyframes barFill {
          0% { width: 0%; }
          60% { width: 75%; }
          90% { width: 92%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
}
