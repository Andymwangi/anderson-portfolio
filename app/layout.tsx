import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Instrument_Sans, DM_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AppLoaderManager } from "@/components/app-loader-manager";
import { PageWrapper } from "@/components/page-wrapper";
import { FloatingNavbar } from "@/components/floating-navbar";
import { MobileNav } from "@/components/mobile-nav";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
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

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0D0D0D",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${cormorant.variable} ${instrument.variable} ${dmMono.variable}`}
    >
      <body className="min-h-screen bg-canvas font-sans text-ink antialiased">
        <Script
          src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"
          strategy="afterInteractive"
        />

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          themes={["dark", "light"]}
          enableSystem={false}
          storageKey="theme"
          disableTransitionOnChange={false}
        >
          <div className="noise-overlay" aria-hidden />
          <AppLoaderManager>
            <FloatingNavbar />
            <MobileNav />
            <PageWrapper>{children}</PageWrapper>
          </AppLoaderManager>
        </ThemeProvider>
      </body>
    </html>
  );
}
