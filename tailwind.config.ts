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

        /* ── Parchment & Ink raw palette ── */
        parchment: {
          DEFAULT: "#F7F4EF",   /* page bg light */
          50:      "#FDFCFA",
          100:     "#F7F4EF",
          200:     "#F0EBE3",
          300:     "#EDE7DC",
          400:     "#E4DDD1",
          500:     "#D4C9B8",
          600:     "#C0B09C",
          700:     "#A89880",
          800:     "#9A8E82",
          900:     "#7A6E62",
        },

        ink: {
          DEFAULT: "#1C1410",
          50:      "#5A4E43",
          100:     "#3D3328",
          200:     "#2A2218",
          300:     "#1C1410",
          400:     "#161310",   /* dark bg subtle */
          500:     "#0F0D0A",   /* dark bg */
          600:     "#0A0806",
          700:     "#070504",
        },

        bronze: {
          DEFAULT: "#7C6A52",   /* accent light mode */
          light:   "#C9A87A",   /* golden sand / accent dark mode */
          bright:  "#E8C898",   /* hover bright */
          dark:    "#5A4A36",
          muted:   "#B8956A",   /* highlight */
        },

        /* Keep these for backward compatibility */
        warm: {
          DEFAULT: "#EDE7DC",
          dark:    "#1E1A15",
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

        /* Legacy mappings so existing classnames don't break */
        brown: {
          DEFAULT: "#C9A87A",
          dark:    "#7C6A52",
          light:   "#E8C898",
        },
        orange: {
          DEFAULT: "#C9A87A",
          dark:    "#7C6A52",
          light:   "#E8C898",
        },

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