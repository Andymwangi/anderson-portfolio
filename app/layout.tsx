import type React from "react";
import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import Script from "next/script";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import FloatingNavbar from "@/components/floating-navbar";
import { MobileNav } from "@/components/mobile-nav";
import { ThemeProvider } from "@/components/theme-provider";
import { PageWrapper } from "@/components/page-wrapper";
import { AppLoaderManager } from "@/components/app-loader-manager";
import { InteractiveEffects } from "@/components/interactive-effects";
import { SmoothScroll } from "@/components/smooth-scroll";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair"
});
const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-jetbrains"
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
      <body className={cn("min-h-screen bg-background font-sans antialiased selection:bg-accent selection:text-black", inter.className)}>
        {/* Unicorn Studio 3D Background */}
        <div 
          className="fixed top-0 left-0 w-full h-screen -z-10" 
          style={{ 
            maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 85%, transparent)',
            filter: 'sepia(0.8) hue-rotate(330deg) saturate(0.6) brightness(0.9)',
            opacity: 0.6
          }}
        >
          <div className="absolute w-full h-full left-0 top-0">
            <div data-us-project="NMlvqnkICwYYJ6lYb064" className="absolute w-full h-full left-0 top-0"></div>
          </div>
        </div>

        <Script
          id="unicorn-studio"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
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
