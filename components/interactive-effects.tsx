"use client";

import { useEffect } from "react";
import gsap from "gsap";

/**
 * Interactive Effects Component
 * Handles spotlight tracking, magnetic buttons, and other interactions from landing page
 */
export function InteractiveEffects() {
  useEffect(() => {
    // 2. MAGNETIC BUTTONS
    const buttons = document.querySelectorAll('.btn-magnetic');
    buttons.forEach((btn) => {
      const button = btn as HTMLElement;

      const handleMouseMoveBtn = (e: MouseEvent) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(button, { x: x * 0.3, y: y * 0.3, duration: 0.2 });
      };

      const handleMouseLeave = () => {
        gsap.to(button, { x: 0, y: 0, duration: 0.2 });
      };

      button.addEventListener('mousemove', handleMouseMoveBtn);
      button.addEventListener('mouseleave', handleMouseLeave);
    });

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      buttons.forEach((btn) => {
        const button = btn as HTMLElement;
        button.removeEventListener('mousemove', () => {});
        button.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return <div className="noise-overlay"></div>;
}
