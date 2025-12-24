"use client";

import Navbar from "./Navbar";
import Footer from "./Footer";
import { content } from "@/lib/content";
import { usePathname } from "next/navigation";

export default function PageLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");
  const currentContent = isEnglish ? content.en : content.hu;

  return (
    <div className="min-h-screen bg-primary text-text-main flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          {children}
        </div>
      </main>
      <Footer content={currentContent.footer} />
    </div>
  );
}
