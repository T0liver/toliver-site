"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { content } from "@/lib/content";

export default function NotFound() {
  const pathname = usePathname();
  const isEnglish = pathname?.startsWith("/en") ?? false;
  const footerContent = isEnglish ? content.en.footer : content.hu.footer;

  return (
    <div className="min-h-screen bg-primary text-text-main flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow flex flex-col items-center justify-center px-6 text-center relative overflow-hidden pt-20 pb-20">
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none z-0">
          <span className="text-[20vw] font-mono font-bold text-highlight opacity-20 blur-sm">
            404
          </span>
        </div>

        <div className="relative z-10 max-w-2xl w-full flex flex-col items-center gap-8">
          
          <motion.div 
            initial={{ y: 0 }}
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative w-64 h-64 md:w-80 md:h-80 mb-4"
          >
            <Image 
                src="/images/opossum-lost.svg" 
                alt="Lost Possum" 
                fill 
                className="object-contain"
                />
          </motion.div>

          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-lg font-bold text-highlight font-mono">
                Úgy tűnik, ez az oldal nem létezik, vagy az oposszumok elrágcsálták a vezetékeket.
              </p>
            </div>

            <div className="w-16 h-px bg-secondary/30 mx-auto" />

            <div className="space-y-2 opacity-80">
              <p className="font-mono">
                It seems this page doesn't exist, or the possums chewed through the cables.
              </p>
            </div>
          </div>

          <Link 
            href="/" 
            className="mt-8 px-8 py-3 bg-secondary/10 hover:bg-secondary/20 text-secondary border border-secondary/50 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] font-mono font-bold flex items-center gap-2"
          >
            <span>←</span>
            <span>Vissza a bázisra / Back to Base</span>
          </Link>

        </div>
      </main>

      <Footer content={footerContent} />
    </div>
  );
}
