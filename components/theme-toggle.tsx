"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative h-9 w-9 text-foreground"
      aria-label="Toggle theme"
    >
      <iconify-icon
        icon="solar:sun-bold"
        width="22"
        height="22"
        className="block transition-opacity dark:opacity-0 dark:pointer-events-none"
      />
      <iconify-icon
        icon="solar:moon-bold"
        width="22"
        height="22"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity dark:opacity-100"
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
