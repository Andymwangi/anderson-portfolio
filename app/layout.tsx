import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AppLoaderManager } from "@/components/app-loader-manager";
import { PageWrapper } from "@/components/page-wrapper";
import { FloatingNavbar } from "@/components/floating-navbar";
import { MobileNav } from "@/components/mobile-nav";
import { SmoothScroll } from "@/components/smooth-scroll";
import { InteractiveEffects } from "@/components/interactive-effects";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anderson Mwangi - Cybersecurity & Cloud Engineer",
  description:
    "Portfolio of Anderson Mwangi, a freelance developer specializing in cybersecurity, cloud engineering, and full stack development.",
  keywords:
    "anderson mwangi, cybersecurity, cloud engineering, full stack developer, next.js, typescript",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased selection:bg-accent selection:text-black">
        {/* Unicorn Studio 3D Background - Fixed and persistent */}
        <div 
          className="fixed inset-0 w-full h-full pointer-events-none" 
          style={{ 
            zIndex: 0,
            maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 85%, transparent)',
            filter: 'sepia(0.8) hue-rotate(330deg) saturate(0.6) brightness(0.9)',
            opacity: 0.6
          }}
        >
          <div 
            data-us-project="NMlvqnkICwYYJ6lYb064" 
            className="w-full h-full"
          ></div>
        </div>

        {/* Unicorn Studio Script - Load once */}
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
            `
          }}
        />
        
        {/* Iconify Script for Solar Icons */}
        <Script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js" strategy="afterInteractive" />
        
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <SmoothScroll />
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
