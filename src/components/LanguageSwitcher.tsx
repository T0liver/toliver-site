"use client";

import { Languages } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher({ className = "fixed top-6 right-6 z-50" }: { className?: string }) {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  const targetPath = isEnglish 
    ? pathname.replace(/^\/en/, "") || "/" 
    : `/en${pathname}`;

  return (
    <Link
      href={targetPath}
      className={`${className} inline-flex items-center justify-center p-3 bg-glass-base/80 backdrop-blur-md border border-secondary/30 rounded-full text-secondary hover:text-highlight hover:border-highlight transition-all duration-300 shadow-lg group`}
      aria-label={isEnglish ? "Váltás magyarra" : "Switch to English"}
    >
      <Languages className="w-6 h-6 group-hover:scale-110 transition-transform" />
    </Link>
  );
}