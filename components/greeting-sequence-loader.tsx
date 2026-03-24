"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const GREETINGS = ["Jambo,", "Hello,", "Hola,", "Bonjour,", "Olá,"] as const;

const TIMINGS = {
  intro: {
    staggerMs: 280,
    enterMs: 550,
    holdMs: 1200,
    exitMs: 700,
  },
  nav: {
    staggerMs: 200,
    enterMs: 480,
    holdMs: 700,
    exitMs: 520,
  },
} as const;

export type GreetingLoaderVariant = "intro" | "nav";

type GreetingSequenceLoaderProps = {
  onComplete?: () => void;
  className?: string;
  /** intro = first open; nav = between pages (slightly snappier timings) */
  variant?: GreetingLoaderVariant;
};

export function GreetingSequenceLoader({
  onComplete,
  className,
  variant = "intro",
}: GreetingSequenceLoaderProps) {
  const [exiting, setExiting] = useState(false);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  const { staggerMs, enterMs, holdMs, exitMs } = TIMINGS[variant];

  useEffect(() => {
    setExiting(false);
    const n = GREETINGS.length;
    const totalEnter = (n - 1) * staggerMs + enterMs;
    const tExit = window.setTimeout(() => setExiting(true), totalEnter + holdMs);
    const tDone = window.setTimeout(() => {
      onCompleteRef.current?.();
    }, totalEnter + holdMs + exitMs);
    return () => {
      window.clearTimeout(tExit);
      window.clearTimeout(tDone);
    };
  }, [variant, staggerMs, enterMs, holdMs, exitMs]);

  return (
    <>
      <style>{`
        @keyframes greeting-enter {
          0% { transform: translateY(40px); filter: blur(4px); opacity: 0; }
          100% { transform: translateY(0); filter: blur(0); opacity: 1; }
        }
      `}</style>
      <div
        className={cn(
          "fixed inset-0 z-[9500] flex h-screen w-full items-center justify-center transition-opacity ease-out",
          exiting ? "pointer-events-none opacity-0" : "opacity-100",
          className,
        )}
        style={{
          transitionDuration: `${exitMs}ms`,
          backgroundColor: "#0D0D0D",
        }}
        aria-hidden
      >
        <p
          className="flex flex-wrap items-baseline justify-center gap-x-2 px-6 text-center font-sans text-xl font-light tracking-tight text-[var(--accent-bright)] md:gap-x-3 md:text-2xl"
          style={{ lineHeight: 1.2 }}
        >
          {GREETINGS.map((g, i) => (
            <span
              key={`${g}-${i}`}
              className="inline-block"
              style={{
                animationName: "greeting-enter",
                animationDuration: `${enterMs}ms`,
                animationDelay: `${i * staggerMs}ms`,
                animationFillMode: "both",
                animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              {g}
            </span>
          ))}
        </p>
      </div>
    </>
  );
}
