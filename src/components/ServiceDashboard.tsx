"use client";

import { motion } from "framer-motion";
import { Search, Radio, FileText, FileType, Activity, AlertCircle, Archive } from "lucide-react";
import { Content } from "@/lib/content";

type Status = "operational" | "maintenance" | "legacy";

interface Service {
  name: string;
  version: string;
  status: Status;
  icon: any;
  link?: string;
}

const services: Service[] = [
  {
    name: "Keresőmotor",
    version: "v2025.9.3",
    status: "operational",
    icon: Search,
    link: "https://keres.toliver.hu/",
  },
  {
    name: "Blog",
    version: "v6.9",
    status: "operational",
    icon: FileType,
    link: "https://blog.toliver.hu/",
  },
  {
    name: "Pastebin",
    version: "v3.4.1",
    status: "maintenance",
    icon: FileText,
    link: "https://paste.toliver.hu/",
  },
  {
    name: "Online Rádió",
    version: "v0.23.2",
    status: "legacy",
    icon: Radio,
  },
];

const statusConfig = {
  operational: {
    color: "bg-green-500",
    shadow: "shadow-[0_0_10px_rgba(34,197,94,0.5)]",
    label: "Operational",
    icon: Activity,
  },
  maintenance: {
    color: "bg-yellow-500",
    shadow: "shadow-[0_0_10px_rgba(234,179,8,0.5)]",
    label: "Maintenance",
    icon: AlertCircle,
  },
  legacy: {
    color: "bg-gray-500",
    shadow: "shadow-[0_0_10px_rgba(107,114,128,0.5)]",
    label: "Legacy",
    icon: Archive,
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

export default function ServiceDashboard({ content }: { content: Content["services"] }) {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="flex flex-col gap-8"
      >
        {/* Section Title */}
        <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-bold text-highlight font-mono flex items-center gap-3">
          <span className="text-xl">02.</span> 
          {content.title}
        </motion.h2>

        {/* Intro Text */}
        <motion.p variants={itemVariants} className="text-text-muted text-lg max-w-3xl -mt-4 mb-4">
          {content.intro}
        </motion.p>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.items.map((serviceItem, index) => {
            // Map the content item to the service configuration (icon, version)
            // We assume the order matches or we could map by ID, but for now index is fine as structure is static
            const baseService = services[index];
            const StatusIcon = statusConfig[baseService.status].icon;
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card p-6 rounded-xl flex flex-col justify-between gap-6 group hover:border-secondary/50 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Header */}
                <div className="flex justify-between items-start">
                  <div className="p-2 bg-white/5 rounded-lg text-secondary group-hover:text-highlight transition-colors">
                    <baseService.icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs text-text-muted bg-black/20 px-2 py-1 rounded">
                    {baseService.version}
                  </span>
                </div>

                {/* Body */}
                <div>
                  <a href={baseService.link ?? "#"} target="_blank" rel="noopener noreferrer" className="block">
                    <h3 className="text-lg font-bold text-text-main group-hover:underline decoration-secondary underline-offset-4 decoration-2 transition-all">
                      {serviceItem.name}
                    </h3>
                  </a>
                </div>

                {/* Footer / Status */}
                <div className="flex items-center gap-2 pt-4 border-t border-white/5">
                  <div className={`w-2 h-2 rounded-full ${statusConfig[baseService.status].color} ${statusConfig[baseService.status].shadow} animate-pulse`} />
                  <span className={`text-xs font-medium uppercase tracking-wider ${baseService.status === 'operational' ? 'text-green-400' : baseService.status === 'maintenance' ? 'text-yellow-400' : 'text-gray-400'}`}>
                    {content.statusLabels[baseService.status]}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}