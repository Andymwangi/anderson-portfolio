import type React from "react";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import FloatingNavbar from "@/components/floating-navbar";
import { MobileNav } from "@/components/mobile-nav";
import { ThemeProvider } from "@/components/theme-provider";
import { PageWrapper } from "@/components/page-wrapper";
import { AppLoaderManager } from "@/components/app-loader-manager";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ 
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins"
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
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${poppins.variable}`}>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <AppLoaderManager>
            <div className="flex">
              <div className="hidden md:flex">
                <Sidebar />
              </div>
              <PageWrapper>
                <FloatingNavbar />
                <MobileNav />
                {children}
              </PageWrapper>
            </div>
          </AppLoaderManager>
        </ThemeProvider>
      </body>
    </html>
  );
}
