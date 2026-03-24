"use client";

import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

/* Palette: brick orange + white tint */
const ACCENT = "#E85D24";
const TINT_LIGHT = "#FFFFFF";

const LiquidMetal = dynamic(
  () => import("@paper-design/shaders-react").then((m) => m.LiquidMetal),
  {
    ssr: false,
    loading: () => (
      <span
        className="absolute inset-0 rounded-md"
        style={{ background: ACCENT }}
      />
    ),
  }
);

interface LiquidMetalButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "filled" | "outline";
  children: React.ReactNode;
  className?: string;
}

const BORDER_WIDTH = 2;

export function LiquidMetalButton({
  variant = "filled",
  children,
  className,
  style,
  disabled,
  ...props
}: LiquidMetalButtonProps) {
  const isFilled = variant === "filled";
  const showShader = !disabled;

  const inner = (
    <span
      className={cn(
        "relative inline-flex items-center justify-center min-h-[52px] min-w-[140px] px-8 py-4 overflow-hidden rounded-md font-bold transition-opacity hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--accent-bright)] disabled:opacity-70 disabled:cursor-not-allowed",
        className
      )}
      style={style as React.CSSProperties}
    >
      {/* Liquid metal only on the border: shader fills full area, then solid face inset so only the ring shows */}
      {showShader && (
        <span className="absolute inset-0 w-full h-full rounded-md overflow-hidden">
          <LiquidMetal
            width="100%"
            height="100%"
            className="!absolute !inset-0 !w-full !h-full rounded-md"
            colorBack={ACCENT}
            colorTint={TINT_LIGHT}
            shape="circle"
            repetition={2}
            softness={0.12}
            shiftRed={0.25}
            shiftBlue={0.25}
            distortion={0.06}
            contour={0.35}
            angle={70}
            speed={1}
            scale={0.85}
            fit="cover"
          />
        </span>
      )}
      {/* Solid button face: inset so the shader shows only as a border */}
      {showShader && (
        <span
          className="absolute rounded-[4px] z-[1]"
          style={{
            inset: `${BORDER_WIDTH}px`,
            background: isFilled ? ACCENT : "var(--bg)",
          }}
          aria-hidden
        />
      )}
      {disabled && (
        <span
          className="absolute inset-0 rounded-md z-[1]"
          style={{ background: "var(--surface-2)" }}
          aria-hidden
        />
      )}
      <span
        className={cn(
          "relative z-10 font-mono text-[10px] tracking-widest uppercase",
          isFilled ? "text-white" : "text-[var(--accent-bright)]"
        )}
      >
        {children}
      </span>
    </span>
  );

  return (
    <button className="btn-magnetic border-0 bg-transparent p-0 cursor-pointer disabled:cursor-not-allowed" disabled={disabled} aria-busy={disabled} {...props}>
      {inner}
    </button>
  );
}
