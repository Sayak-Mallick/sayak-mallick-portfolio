"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-16 border-b"
      style={{
        padding: "0 var(--gutter)",
        background: "rgba(10,10,10,0.88)",
        backdropFilter: "blur(16px)",
        borderColor: "var(--border)",
      }}
    >
      <div
        className="absolute top-0 left-20 right-20 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(232,255,71,0.45), transparent)",
        }}
      />
    </nav>
  );
};
