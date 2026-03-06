"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface LogosCarouselProps {
  children: React.ReactNode;
  stagger?: number;
  count?: number;
  className?: string;
  duration?: number;
  interval?: number;
  initialDelay?: number;
}

export function LogosCarousel({
  children,
  stagger = 0.14,
  count = 4,
  className,
  duration = 600,
  interval = 2500,
  initialDelay = 500,
}: LogosCarouselProps) {
  const [index, setIndex] = React.useState(0);
  const [animate, setAnimate] = React.useState(false);
  const [transitioning, setTransitioning] = React.useState(false);

  const childrenArray = React.Children.toArray(children);
  const logosPerGroup = count;
  const groups: React.ReactNode[][] = [];

  for (let i = 0; i < childrenArray.length; i += logosPerGroup) {
    groups.push(childrenArray.slice(i, i + logosPerGroup));
  }

  const groupsLength = groups.length;

  React.useEffect(() => {
    const id = setTimeout(() => setAnimate(true), initialDelay);
    return () => clearTimeout(id);
  }, [initialDelay]);

  React.useEffect(() => {
    if (!animate || groupsLength === 0) return;
    const intervalId = setInterval(() => {
      setTransitioning(true);
    }, interval);
    return () => clearInterval(intervalId);
  }, [animate, interval, groupsLength]);

  React.useEffect(() => {
    if (!transitioning || groupsLength === 0) return;
    const totalDuration = duration + stagger * logosPerGroup * 1000;
    const timeoutId = setTimeout(() => {
      setIndex((prev) => (prev + 1) % groupsLength);
      setTransitioning(false);
    }, totalDuration);
    return () => clearTimeout(timeoutId);
  }, [transitioning, groupsLength, duration, stagger, logosPerGroup]);

  if (groupsLength === 0) return null;

  const currentGroup = groups[index];
  const nextGroup = groups[(index + 1) % groupsLength];
  const showTransition = animate && transitioning;

  return (
    <>
      <style>{`
        @keyframes logos-enter {
          0% { transform: translateY(40px); filter: blur(4px); opacity: 0; }
          100% { transform: translateY(0); filter: blur(0); opacity: 1; }
        }
        @keyframes logos-exit {
          0% { transform: translateY(0); filter: blur(0); opacity: 1; }
          100% { transform: translateY(-40px); filter: blur(4px); opacity: 0; }
        }
      `}</style>
      <div
        className={cn("relative flex flex-wrap justify-center items-center gap-10 md:gap-14 px-6 py-5 min-h-[80px]", className)}
        style={{ borderColor: "var(--border-raw)", background: "var(--bg-subtle)" }}
      >
        <div className="relative w-full flex justify-center items-center">
          {showTransition ? (
            <>
              <div className="absolute inset-0 flex flex-wrap justify-center items-center gap-10 md:gap-14">
                {currentGroup.map((logo, logoIndex) => (
                  <Logo
                    key={`exit-${index}-${logoIndex}`}
                    animate
                    index={logoIndex}
                    state="exit"
                    stagger={stagger}
                    duration={duration}
                  >
                    {logo}
                  </Logo>
                ))}
              </div>
              <div className="absolute inset-0 flex flex-wrap justify-center items-center gap-10 md:gap-14">
                {nextGroup.map((logo, logoIndex) => (
                  <Logo
                    key={`enter-${(index + 1) % groupsLength}-${logoIndex}`}
                    animate
                    index={logoIndex}
                    state="enter"
                    stagger={stagger}
                    duration={duration}
                  >
                    {logo}
                  </Logo>
                ))}
              </div>
            </>
          ) : (
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-14">
              {currentGroup.map((logo, logoIndex) => (
                <React.Fragment key={`${index}-${logoIndex}`}>{logo}</React.Fragment>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

interface LogoProps {
  children: React.ReactNode;
  animate?: boolean;
  index: number;
  state?: "enter" | "exit";
  stagger?: number;
  duration?: number;
}

function Logo({
  children,
  animate,
  index,
  state = "enter",
  stagger = 0.14,
  duration = 500,
}: LogoProps) {
  const delay = index * stagger;
  const animationName = state === "enter" ? "logos-enter" : "logos-exit";

  if (!animate) {
    return <div className="flex items-center gap-3">{children}</div>;
  }

  return (
    <div
      className="flex items-center gap-3"
      style={{
        animationName,
        animationDuration: `${duration}ms`,
        animationDelay: `${delay}s`,
        animationFillMode: "both",
      }}
    >
      {children}
    </div>
  );
}

export default LogosCarousel;
