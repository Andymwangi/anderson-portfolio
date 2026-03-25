"use client"

import * as React from "react"
import { flushSync } from "react-dom"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

type DocumentWithViewTransition = Document & {
  startViewTransition?: (callback: () => void | Promise<void>) => {
    ready: Promise<void>
    finished: Promise<void>
  }
}

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [ready, setReady] = React.useState(false)

  React.useEffect(() => setReady(true), [])

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const current = resolvedTheme === "light" ? "light" : "dark"
    const next = current === "light" ? "dark" : "light"

    if (!ready) {
      setTheme(next)
      return
    }

    const doc = document as DocumentWithViewTransition
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (!doc.startViewTransition || reduceMotion) {
      setTheme(next)
      return
    }

    const x = e.clientX
    const y = e.clientY
    const r = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    )

    const transition = doc.startViewTransition(() => {
      const root = document.documentElement
      root.classList.remove("light", "dark")
      root.classList.add(next)
      root.style.colorScheme = next === "dark" ? "dark" : "light"
      flushSync(() => setTheme(next))
    })

    transition.ready
      .then(() => {
        return doc.documentElement.animate(
          {
            clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`],
          },
          {
            duration: 520,
            easing: "cubic-bezier(0.22, 1, 0.36, 1)",
            pseudoElement: "::view-transition-new(root)",
          }
        ).finished
      })
      .catch(() => {})
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleToggle}
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
