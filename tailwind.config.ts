import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm:  "640px",
        md:  "768px",
        lg:  "1024px",
        xl:  "1280px",
        "2xl": "1400px",
      },
    },
    extend: {
      /* ── Fonts ── */
      fontFamily: {
        sans:    ["var(--font-instrument)", "Instrument Sans", "sans-serif"],
        serif:   ["var(--font-cormorant)", "Cormorant Garamond", "serif"],
        mono:    ["var(--font-dm-mono)", "DM Mono", "monospace"],
        display: ["var(--font-cormorant)", "Cormorant Garamond", "serif"],
      },

      /* ── Colours ── */
      colors: {
        /* shadcn/ui semantic tokens → CSS vars */
        border:      "hsl(var(--border))",
        input:       "hsl(var(--input))",
        ring:        "hsl(var(--ring))",
        background:  "hsl(var(--background))",
        foreground:  "hsl(var(--foreground))",

        primary: {
          DEFAULT:    "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT:    "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT:    "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT:    "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT:    "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT:    "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT:    "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        /* ── Neutral surfaces (legacy parchment / ink names) ── */
        parchment: {
          DEFAULT: "#FAFAFA",
          50:      "#FFFFFF",
          100:     "#FAFAFA",
          200:     "#F4F4F5",
          300:     "#E4E4E7",
          400:     "#D4D4D8",
          500:     "#A1A1AA",
          600:     "#71717A",
          700:     "#52525B",
          800:     "#3F3F46",
          900:     "#27272A",
        },

        ink: {
          DEFAULT: "#0A0A0A",
          50:      "#A1A1AA",
          100:     "#71717A",
          200:     "#52525B",
          300:     "#3F3F46",
          400:     "#27272A",
          500:     "#0D0D0D",
          600:     "#0A0A0A",
          700:     "#050505",
        },

        bronze: {
          DEFAULT: "#E85D24",
          light:   "#FF6B35",
          bright:  "#FF6B35",
          dark:    "#C94A1C",
          muted:   "#E85D24",
        },

        warm: {
          DEFAULT: "#F4F4F5",
          dark:    "#141414",
        },

        /* Sidebar (if used) */
        sidebar: {
          DEFAULT:              "hsl(var(--sidebar-background, var(--background)))",
          foreground:           "hsl(var(--sidebar-foreground, var(--foreground)))",
          primary:              "hsl(var(--sidebar-primary, var(--primary)))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground, var(--primary-foreground)))",
          accent:               "hsl(var(--sidebar-accent, var(--accent)))",
          "accent-foreground":  "hsl(var(--sidebar-accent-foreground, var(--accent-foreground)))",
          border:               "hsl(var(--sidebar-border, var(--border)))",
          ring:                 "hsl(var(--sidebar-ring, var(--ring)))",
        },

        brown: {
          DEFAULT: "#E85D24",
          dark:    "#C94A1C",
          light:   "#FF6B35",
        },
        orange: {
          DEFAULT: "#E85D24",
          dark:    "#C94A1C",
          light:   "#FF6B35",
        },

        /* Legacy home / modal class names → brick + neutrals */
        "warm-copper": "#E85D24",
        "warm-gold": "#E85D24",
        "deep-forest": "#0A0A0A",
        cream: "#F4F4F5",
        charcoal: "#18181B",
        "slate-grey": "#71717A",

        /* Slate kept for utility */
        slate: {
          50:  "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
      },

      /* ── Border radius: editorial = sharp ── */
      borderRadius: {
        none: "0",
        sm:   "0",
        DEFAULT: "0",
        md:   "2px",
        lg:   "4px",
        xl:   "6px",
        "2xl":"8px",
        full: "9999px",
      },

      /* ── Keyframes ── */
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to:   { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to:   { height: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":       { transform: "translateY(-8px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6" },
          "50%":       { opacity: "1" },
        },
        "marquee": {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-33.333%)" },
        },
        "scan": {
          "0%":   { top: "-20%" },
          "100%": { top: "120%" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },

      /* ── Animation utilities ── */
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up":   "accordion-up 0.2s ease-out",
        "float":          "float 4s ease-in-out infinite",
        "pulse-glow":     "pulse-glow 2s ease-in-out infinite",
        "marquee":        "marquee 32s linear infinite",
        "scan":           "scan 4s linear infinite",
        "fade-up":        "fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },

      /* ── Spacing / sizing extras ── */
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
      },

      /* ── Typography scale ── */
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "1rem" }],
        "hero": ["clamp(3.5rem, 10vw, 7.5rem)", { lineHeight: "0.9" }],
      },

      /* ── Letter spacing ── */
      letterSpacing: {
        "widest-2": "0.25em",
        "widest-3": "0.35em",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config