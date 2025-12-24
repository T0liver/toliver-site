"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Terminal, Code2, Coffee, Container, Database, GitBranch, Cpu, Keyboard } from "lucide-react";
import { Content } from "@/lib/content";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function TechStack({ content }: { content: Content["techStack"] }) {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="flex flex-col gap-8"
      >
        {/* Section Title */}
        <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-bold text-highlight font-mono flex items-center gap-3">
          <span className="text-xl">01.</span> 
          {content.title}
        </motion.h2>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
          
          {/* 1. Core Languages (Large Card) */}
          <motion.div 
            variants={itemVariants}
            className="glass-card p-8 rounded-2xl lg:col-span-2 flex flex-col justify-between group hover:border-secondary/50 transition-colors"
          >
            <h3 className="text-xl font-bold text-text-main mb-6 flex items-center gap-2">
              <Code2 className="text-secondary" /> {content.coreLanguages}
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {/* Kotlin */}
              <div className="flex flex-col items-center gap-3 group/icon">
                <div className="relative w-12 h-12 transition-transform group-hover/icon:scale-110 group-hover/icon:drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]">
                  <Image src="/icons/Kotlin_icon.svg" alt="Kotlin" fill className="object-contain" />
                </div>
                <span className="text-sm text-text-muted group-hover/icon:text-text-main transition-colors">Kotlin</span>
              </div>

              {/* Python */}
              <div className="flex flex-col items-center gap-3 group/icon">
                <div className="relative w-12 h-12 transition-transform group-hover/icon:scale-110 group-hover/icon:drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]">
                  <Image src="/icons/python.svg" alt="Python" fill className="object-contain" />
                </div>
                <span className="text-sm text-text-muted group-hover/icon:text-text-main transition-colors">Python</span>
              </div>

              {/* TypeScript (React) - Placeholder Icon */}
              <div className="flex flex-col items-center gap-3 group/icon">
                <div className="relative w-12 h-12 transition-transform group-hover/icon:scale-110 group-hover/icon:drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]">
                  <Image src="/icons/ts-logo.svg" alt="TypeScript" fill className="object-contain" />
                </div>
                <span className="text-sm text-text-muted group-hover/icon:text-text-main transition-colors">TypeScript</span>
              </div>

              {/* Java - Placeholder Icon */}
              <div className="flex flex-col items-center gap-3 group/icon">
                <div className="relative w-12 h-12 transition-transform group-hover/icon:scale-110 group-hover/icon:drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]">
                  <Image src="/icons/java-icon.svg" alt="Java" fill className="object-contain" />
                </div>
                <span className="text-sm text-text-muted group-hover/icon:text-text-main transition-colors">Java</span>
              </div>
            </div>
          </motion.div>

          {/* 2. Environment (Medium Card) */}
          <motion.div 
            variants={itemVariants}
            className="glass-card p-0 rounded-2xl lg:col-span-1 overflow-hidden flex flex-col"
          >
            {/* Terminal Header */}
            <div className="bg-black/40 px-4 py-2 flex items-center gap-2 border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-2 text-xs font-mono text-text-muted">{content.environment.prompt}</span>
            </div>
            
            {/* Terminal Body */}
            <div className="p-6 flex-1 flex flex-col gap-4 font-mono text-sm">
              <div className="text-green-400">
                <span className="text-secondary">➜</span> ~ {content.environment.command}
              </div>
              <div className="text-text-muted opacity-80">
                {content.environment.output}
              </div>
              
              <div className="mt-auto flex gap-4 pt-4 border-t border-white/5">
                <div className="flex items-center gap-2 text-text-main">
                  <Terminal className="w-5 h-5 text-secondary" />
                  <span>Linux</span>
                </div>
                <div className="flex items-center gap-2 text-text-main">
                  <Container className="w-5 h-5 text-blue-400" />
                  <span>Docker</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3. Tools (Wide Strip) */}
          <motion.div 
            variants={itemVariants}
            className="glass-card px-8 py-6 rounded-2xl lg:col-span-3 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <h3 className="text-xl font-bold text-text-main flex items-center gap-2 whitespace-nowrap">
              <Keyboard className="text-secondary" /> {content.tools}
            </h3>
            
            <div className="flex items-center gap-8 md:gap-12 flex-wrap justify-center md:justify-end">
              {/* IntelliJ */}
              <div className="relative w-8 h-8 md:w-10 md:h-10 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 hover:scale-110">
                <Image src="/icons/IntelliJ_IDEA_icon.svg" alt="IntelliJ" fill className="object-contain" />
              </div>

              {/* VS Codeium */}
              <div className="relative w-8 h-8 md:w-10 md:h-10 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 hover:scale-110">
                <Image src="/icons/vscodeium.png" alt="VS Codeium" fill className="object-contain" />
              </div>

              {/* GitHub */}
              <div className="relative w-8 h-8 md:w-10 md:h-10 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 hover:scale-110">
                <Image src="/icons/github-mark-white.svg" alt="GitHub" fill className="object-contain" />
              </div>

              {/* Android*/}
              <div className="relative w-8 h-8 md:w-10 md:h-10 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 hover:scale-110">
                <Image src="/icons/android-flat.svg" alt="Android" fill className="object-contain" />
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}