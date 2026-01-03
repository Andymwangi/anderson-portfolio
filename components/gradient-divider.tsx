"use client";

interface GradientDividerProps {
  fromColor: string;
  toColor: string;
  height?: string;
}

export default function GradientDivider({
  fromColor,
  toColor,
  height = "6rem"
}: GradientDividerProps) {
  return (
    <div
      style={{
        height,
        background: `linear-gradient(to bottom, ${fromColor}, ${toColor})`,
        width: '100%'
      }}
    />
  );
}
