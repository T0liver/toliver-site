"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { Content } from "@/lib/content";
import { usePathname } from "next/navigation";

const projects = [
  {
    tags: ["Python", "Flask", "NLP"],
    link: "https://github.com/T0liver/twitter-evaulater",
    languageColor: "bg-blue-400",
  },
  {
    tags: ["React", "TypeScript", "Vite"],
    link: "https://github.com/T0liver/wthrly",
    languageColor: "bg-green-500",
  },
];

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

export default function ProjectShowcase({ content }: { content: Content["projects"] }) {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");
  const recoutLink = isEnglish ? "/en/projects/recout" : "/projects/recout";

  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="flex flex-col gap-12"
      >
        {/* Section Title */}
        <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-bold text-highlight font-mono flex items-center gap-3">
          <span className="text-xl">03.</span> 
          {content.title}
        </motion.h2>

        {/* Flagship Project: RecOut! */}
        <motion.div 
          variants={itemVariants}
          className="glass-card rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-8 group hover:border-secondary/50 transition-all duration-500"
        >
          {/* Image Side */}
          <div className="relative h-[300px] lg:h-auto bg-gradient-to-br from-glass-base to-black/50 flex items-center justify-center p-8 overflow-hidden">
            <div className="relative w-full h-full max-w-[300px] transform group-hover:scale-105 transition-transform duration-500">
               <Image
                src={content.recout.image}
                alt={content.recout.imageAlt}
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="p-8 lg:p-12 flex flex-col justify-center gap-6">
            <div>
              <h3 className="text-4xl font-bold text-highlight mb-2">{content.recout.title}</h3>
              <p className="text-xl text-text-main font-medium">{content.recout.subtitle}</p>
            </div>

            <p className="text-text-muted leading-relaxed">
              {content.recout.description}
            </p>

            <div className="flex flex-wrap gap-3">
              {content.recout.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-mono border border-secondary/20">
                  {tag}
                </span>
              ))}
            </div>

            <div className="pt-4">
              <Link 
                href={recoutLink} 
                className="inline-flex items-center gap-2 text-text-main hover:text-highlight transition-colors group/link"
              >
                <span className="font-bold border-b border-transparent group-hover/link:border-highlight">{content.recout.linkText}</span>
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {content.other.map((projectItem, index) => {
            const baseProject = projects[index];
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card p-8 rounded-2xl flex flex-col justify-between gap-6 group hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <GithubIcon className="w-6 h-6 text-text-muted group-hover:text-white transition-colors" />
                    <a href={baseProject.link} target="_blank" rel="noopener noreferrer"><ExternalLink className="w-5 h-5 text-text-muted group-hover:text-secondary transition-colors" /></a>
                  </div>
                  <div className={`w-3 h-3 rounded-full ${baseProject.languageColor} shadow-[0_0_8px_currentColor]`} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-text-main mb-2 group-hover:text-secondary transition-colors">
                    <a href={baseProject.link} target="_blank" rel="noopener noreferrer">{projectItem.title}</a>
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {projectItem.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {baseProject.tags.map((tag) => (
                    <span key={tag} className="text-xs font-mono text-text-muted/80">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </motion.div>
    </section>
  );
}