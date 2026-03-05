import type { Metadata } from "next";
import { Cormorant_Garamond, Instrument_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AppLoaderManager } from "@/components/app-loader-manager";
import { PageWrapper } from "@/components/page-wrapper";
import { FloatingNavbar } from "@/components/floating-navbar";
import { MobileNav } from "@/components/mobile-nav";
import { InteractiveEffects } from "@/components/interactive-effects";
import Script from "next/script";

/* ── Fonts ─────────────────────────────────────────────────────────────────
   Valid weights per next/font type definitions in this project's Next version:
     Cormorant_Garamond → "300" | "400" | "500" | "600" | "700"  (static)
     Instrument_Sans    → "400" | "500" | "600" | "700"           (static in this version)
     DM_Mono            → "300" | "400" | "500"                   (static in this version)
── */

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anderson Mwangi - Full Stack Developer & Cybersecurity Engineer",
  description:
    "Portfolio of Anderson Mwangi, a full-stack developer specialising in cybersecurity, cloud engineering, and enterprise systems. Based in Nairobi, Kenya.",
  keywords:
    "anderson mwangi, cybersecurity, cloud engineering, full stack developer, next.js, typescript, nairobi",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${cormorant.variable} ${instrument.variable} ${dmMono.variable}`}
    >
      <body className="min-h-screen bg-background font-sans antialiased selection:bg-accent selection:text-black">
        {/* Unicorn Studio 3D Background - Fixed and persistent */}
        <div
          className="fixed inset-0 w-full h-full pointer-events-none"
          style={{
            zIndex: 0,
            maskImage: "linear-gradient(to bottom, transparent, black 10%, black 85%, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent, black 10%, black 85%, transparent)",
            filter: "sepia(0.8) hue-rotate(330deg) saturate(0.6) brightness(0.9)",
            opacity: 0.6,
          }}
        >
          <div
            data-us-project="NMlvqnkICwYYJ6lYb064"
            className="w-full h-full"
          />
        </div>

        {/* Unicorn Studio Script */}
        <Script
          id="unicorn-studio"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (window.UnicornStudio && window.UnicornStudio.isInitialized) return;
                if (!window.UnicornStudio) window.UnicornStudio = { isInitialized: false };
                var script = document.createElement('script');
                script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js';
                script.onload = function() {
                  if (!window.UnicornStudio.isInitialized) {
                    UnicornStudio.init();
                    window.UnicornStudio.isInitialized = true;
                  }
                };
                document.head.appendChild(script);
              })();
            `,
          }}
        />

        {/* Iconify for Solar Icons */}
        <Script
          src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"
          strategy="afterInteractive"
        />

        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <InteractiveEffects />
          <AppLoaderManager>
            <PageWrapper>
              <FloatingNavbar />
              <MobileNav />
              {children}
            </PageWrapper>
          </AppLoaderManager>
        </ThemeProvider>
      </body>
    </html>
  );
}