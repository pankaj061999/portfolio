"use client";

import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { Providers } from "@/lib/providers";
import { useEffect, ReactNode } from "react";

interface UserFuncLayoutProps {
  children: ReactNode; 
}

export default function UserFuncLayout({ children }: UserFuncLayoutProps) {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      // Disable right-click (context menu)
      const handleContextMenu = (e: MouseEvent) => {
        e.preventDefault();
      };

      // Disable text selection
    //   const handleSelectStart = (e: Event) => {
    //     e.preventDefault();
    //   };

    //   const handleCopy = (e: ClipboardEvent) => {
    //     e.preventDefault();
    //     alert("Copying text is disabled on this site.");
    //   };

      document.addEventListener("contextmenu", handleContextMenu);
    //   document.addEventListener("selectstart", handleSelectStart);
    //   document.addEventListener("copy", handleCopy);

      return () => {
        document.removeEventListener("contextmenu", handleContextMenu);
        // document.removeEventListener("selectstart", handleSelectStart);
        // document.removeEventListener("copy", handleCopy);
      };
    }
  }, []);

  return (
    <Providers>
      <Header />
      {children}
      <Footer />
    </Providers>
  );
}
