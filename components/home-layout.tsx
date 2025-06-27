"use client";

import React from "react";
import FloatingNavbar from "@/components/floating-navbar";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <FloatingNavbar />
      {children}
    </>
  );
}
