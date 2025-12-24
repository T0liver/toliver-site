import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import ServiceDashboard from "@/components/ServiceDashboard";
import ProjectShowcase from "@/components/ProjectShowcase";
import Footer from "@/components/Footer";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { content } from "@/lib/content";

export default function HomeEn() {
  const c = content.en;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden">
      <LanguageSwitcher />
      <Hero content={c.hero} />
      <TechStack content={c.techStack} />
      <ServiceDashboard content={c.services} />
      <ProjectShowcase content={c.projects} />
      <Footer content={c.footer} />
    </main>
  );
}