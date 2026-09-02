import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1152px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-instrument)", "Instrument Sans", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "ui-serif", "Georgia", "serif"],
        mono: ["var(--font-dm-mono)", "DM Mono", "ui-monospace", "monospace"],
      },

      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        /* Raw palette tokens (hex vars from globals.css) */
        canvas: {
          DEFAULT: "var(--bg)",
          subtle: "var(--bg-subtle)",
        },
        surface: {
          DEFAULT: "var(--surface)",
          2: "var(--surface-2)",
        },
        line: {
          DEFAULT: "var(--border-raw)",
          faint: "var(--border-faint)",
        },
        ink: {
          DEFAULT: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
        },
        brick: {
          DEFAULT: "var(--accent-raw)",
          bright: "var(--accent-bright)",
          hover: "var(--accent-hover)",
          pressed: "var(--accent-pressed)",
        },
      },

      borderRadius: {
        none: "0",
        sm: "0",
        DEFAULT: "0",
        md: "2px",
        lg: "4px",
        xl: "6px",
        "2xl": "8px",
        full: "9999px",
      },

      maxWidth: {
        content: "72rem",
        prose: "40rem",
      },

      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },

      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },

      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
