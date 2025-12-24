"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Content } from "@/lib/content";

export default function Hero({ content }: { content: Content["hero"] }) {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-12 md:px-12 lg:px-24 overflow-hidden relative">
      {/* Background Elements (Optional subtle glow) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-highlight/5 rounded-full blur-[100px]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl w-full">
        {/* Left Column: Text */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <span className="font-mono text-highlight text-sm tracking-wider">
            {content.label}
          </span>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-text-main">
            {content.titlePrefix} <br />
            <span className="text-secondary">{content.titleHighlight}</span> {content.titleSuffix}
          </h1>
          
          <p className="text-text-muted text-lg md:text-xl max-w-lg">
            {content.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a 
              href="#projects" 
              className="px-8 py-3 bg-secondary text-white font-medium rounded-lg hover:bg-secondary/90 transition-colors flex items-center justify-center gap-2 group"
            >
              {content.btnProjects}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 border border-highlight text-highlight font-medium rounded-lg hover:bg-highlight/10 transition-colors flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              {content.btnContact}
            </a>
          </div>
        </motion.div>

        {/* Right Column: Visual */}
        <div className="relative flex justify-center items-center">
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ 
              repeat: Infinity, 
              duration: 4, 
              ease: "easeInOut" 
            }}
            className="relative z-10 group cursor-help"
          >
            <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
               <Image
                src="/images/oposszum.png"
                alt="Oposszum"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
            
            {/* Tooltip */}
            <div 
              className="absolute -top-12 right-0 md:-right-12 bg-glass-base/90 border border-secondary/30 backdrop-blur-md px-4 py-2 rounded-lg shadow-xl pointer-events-none opacity-0 translate-y-2 scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-300 ease-out"
            >
              <code className="font-mono text-sm text-secondary">
                {content.tooltip}
              </code>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}