"use client";

import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");
  const homeLink = isEnglish ? "/en" : "/";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-glass-base/80 backdrop-blur-md border-b border-secondary/30 h-20 flex items-center justify-between px-6 md:px-12">
      {/* Branding - Left */}
      <Link href={homeLink} className="hover:opacity-80 transition-opacity">
        <div className="relative h-8 w-auto aspect-[3/1]">
           {/* Using object-contain to ensure logo fits well */}
           <Image 
            src="/logos/logo-feher.png" 
            alt="Logo" 
            width={120} 
            height={40}
            className="h-full w-auto object-contain"
            priority
           />
        </div>
      </Link>

      {/* Functions - Right */}
      <div>
        <LanguageSwitcher className="relative" />
      </div>
    </nav>
  );
}
