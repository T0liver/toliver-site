"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, MastodonIcon } from "@/components/Icons";
import { Content } from "@/lib/content";

const socialLinks = [
  {
    name: "GitHub",
    username: "T0liver",
    url: "https://github.com/T0liver",
    icon: GithubIcon,
    color: "hover:text-white",
    bg: "hover:bg-[#333]",
  },
  {
    name: "LinkedIn",
    username: "Oliver T",
    url: "https://www.linkedin.com/in/0liver-t/",
    icon: LinkedinIcon,
    color: "hover:text-white",
    bg: "hover:bg-[#0077b5]",
  },
  {
    name: "Mastodon",
    username: "t0liver@cyberplace.social",
    url: "https://cyberplace.social/@t0liver",
    icon: MastodonIcon,
    color: "hover:text-white",
    bg: "hover:bg-[#1DA1F2]",
  },
];

export default function Footer({ content }: { content: Content["footer"] }) {
  return (
    <footer id="contact" className="relative pt-24 pb-12 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-black/40 to-transparent -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
        
        {/* Left Column: Contact & Social */}
        <div className="flex flex-col gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-text-main mb-6">
              {content.titlePrefix} <br />
              <span className="text-highlight">{content.titleHighlight}</span>
            </h2>
            <p className="text-text-muted text-lg max-w-md mb-8">
              {content.text}
            </p>
            
            <a 
              href="mailto:contact@toliver.hu" 
              className="inline-flex items-center gap-3 px-6 py-3 bg-secondary/10 border border-secondary/30 rounded-lg text-secondary hover:bg-secondary hover:text-white transition-all duration-300 group"
            >
              <Mail className="w-5 h-5" />
              <span className="font-mono">contact@toliver.hu</span>
            </a>
          </motion.div>

          {/* Social Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`glass-card p-6 rounded-xl flex flex-col items-center justify-center gap-3 group transition-all duration-300 ${social.bg}`}
              >
                <social.icon className={`w-8 h-8 text-text-muted transition-colors ${social.color}`} />
                <span className="font-bold text-text-main">{social.name}</span>
                <span className="text-xs text-text-muted opacity-0 group-hover:opacity-100 transition-opacity -mt-2">
                  {social.username}
                </span>
              </motion.a>
            ))}
          </div>

          {/* Impressum */}
          <div className="font-mono text-xs text-text-muted/50 mt-8">
            <p>{content.impressum}</p>
            <p>&copy; {new Date().getFullYear()} T0liver</p>
          </div>
        </div>

        {/* Right Column: Sleeping Opossum */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center lg:justify-end items-end"
        >
          <div className="relative w-[250px] h-[250px] md:w-[350px] md:h-[350px] opacity-80 hover:opacity-100 transition-opacity duration-500">
             <Image
              src="/images/opossum-sleep.svg"
              alt="Sleeping Oposszum"
              fill
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </motion.div>

      </div>
    </footer>
  );
}