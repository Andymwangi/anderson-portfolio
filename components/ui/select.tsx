"use client"

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"

import { cn } from "@/lib/utils"

const Select = SelectPrimitive.Root
const SelectGroup = SelectPrimitive.Group
const SelectValue = SelectPrimitive.Value

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="m5 12 4.5 4.5L19 7" />
    </svg>
  )
}

function SelectTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger>) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      className={cn(
        "group flex w-full items-center justify-between gap-3 bg-transparent py-1 text-left text-base leading-normal text-ink outline-none transition-colors duration-200 ease-editorial",
        "data-[placeholder]:text-ink-muted",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <span className="min-w-0 truncate">{children}</span>
      <SelectPrimitive.Icon asChild>
        <ChevronIcon className="h-3 w-3 shrink-0 text-ink-muted transition-[transform,color] duration-300 ease-editorial group-hover:text-ink group-data-[state=open]:rotate-180 group-data-[state=open]:text-brick-bright" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      className={cn(
        "flex cursor-default items-center justify-center bg-surface py-1 text-ink-muted",
        className
      )}
      {...props}
    >
      <ChevronIcon className="h-3 w-3 rotate-180" />
    </SelectPrimitive.ScrollUpButton>
  )
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      className={cn(
        "flex cursor-default items-center justify-center bg-surface py-1 text-ink-muted",
        className
      )}
      {...props}
    >
      <ChevronIcon className="h-3 w-3" />
    </SelectPrimitive.ScrollDownButton>
  )
}

function SelectContent({
  className,
  children,
  position = "popper",
  sideOffset = 10,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        position={position}
        sideOffset={sideOffset}
        className={cn(
          "relative z-[9500] max-h-80 min-w-[12rem] overflow-hidden border border-line bg-surface text-ink shadow-[0_24px_60px_-24px_rgba(0,0,0,0.55)]",
          "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
          "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
          "data-[side=bottom]:slide-in-from-top-1 data-[side=top]:slide-in-from-bottom-1",
          position === "popper" && "w-[var(--radix-select-trigger-width)]",
          className
        )}
        {...props}
      >
        <span aria-hidden className="absolute inset-x-0 top-0 z-10 h-px bg-brick-bright" />
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            position === "popper" && "max-h-[var(--radix-select-content-available-height)]"
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      className={cn("mono-label px-4 pb-2 pt-4 text-ink-muted", className)}
      {...props}
    />
  )
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "group relative flex cursor-pointer select-none items-center gap-3 border-t border-line-faint py-3 pl-4 pr-10 text-[14.5px] leading-snug text-ink-secondary outline-none transition-colors duration-150 ease-editorial first:border-t-0",
        "data-[highlighted]:bg-canvas-subtle data-[highlighted]:text-ink",
        "data-[state=checked]:text-ink",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      {...props}
    >
      <span
        aria-hidden
        className="absolute inset-y-0 left-0 w-[2px] origin-top scale-y-0 bg-brick-bright transition-transform duration-200 ease-editorial group-data-[highlighted]:scale-y-100 group-data-[state=checked]:scale-y-100"
      />
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator className="absolute right-4 flex items-center">
        <CheckIcon className="h-3.5 w-3.5 text-brick-bright" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  )
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      className={cn("h-px bg-line", className)}
      {...props}
    />
  )
}

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}
