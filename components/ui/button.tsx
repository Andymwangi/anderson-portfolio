import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.16em] transition-all duration-200 ease-editorial disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        filled: "bg-brick text-white hover:bg-brick-hover active:bg-brick-pressed",
        outline: "border border-line text-ink hover:border-ink",
        ghost: "text-ink-secondary hover:bg-canvas-subtle hover:text-ink",
        link: "h-auto px-0 text-ink hover:text-brick-bright",
        chip: "border border-line text-ink-muted hover:border-ink hover:text-ink data-[active=true]:border-ink data-[active=true]:bg-ink data-[active=true]:text-canvas",
      },
      size: {
        default: "h-12 px-7",
        sm: "h-10 px-5",
        lg: "h-14 px-9",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "filled",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
