"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const GREETINGS = ["Jambo,", "Hello,", "Bonjour,"] as const;

const STAGGER_MS = 260;
const ENTER_MS = 520;
const HOLD_MS = 900;
const EXIT_MS = 560;

type GreetingSequenceLoaderProps = {
  onComplete?: () => void;
  className?: string;
};

export function GreetingSequenceLoader({ onComplete, className }: GreetingSequenceLoaderProps) {
  const [exiting, setExiting] = useState(false);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    const totalEnter = (GREETINGS.length - 1) * STAGGER_MS + ENTER_MS;
    const tExit = window.setTimeout(() => setExiting(true), totalEnter + HOLD_MS);
    const tDone = window.setTimeout(() => {
      onCompleteRef.current?.();
    }, totalEnter + HOLD_MS + EXIT_MS);
    return () => {
      window.clearTimeout(tExit);
      window.clearTimeout(tDone);
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes greeting-enter {
          0% { transform: translateY(24px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
      <div
        className={cn(
          "fixed inset-0 z-[9500] flex h-screen w-full items-center justify-center bg-canvas transition-opacity ease-out",
          exiting ? "pointer-events-none opacity-0" : "opacity-100",
          className
        )}
        style={{ transitionDuration: `${EXIT_MS}ms` }}
        aria-hidden
      >
        <p className="display-md flex flex-wrap items-baseline justify-center gap-x-3 px-6 text-center text-ink md:gap-x-4">
          {GREETINGS.map((greeting, i) => (
            <span
              key={greeting}
              className="inline-block"
              style={{
                animationName: "greeting-enter",
                animationDuration: `${ENTER_MS}ms`,
                animationDelay: `${i * STAGGER_MS}ms`,
                animationFillMode: "both",
                animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              {greeting}
            </span>
          ))}
        </p>
      </div>
    </>
  );
}
