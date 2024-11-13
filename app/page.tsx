import { EnhancedContactSection } from "@/components/enhanced-contact-section";
import Blogs from "@/components/home/Blogs";
import Hero from "@/components/home/hero";
import HomeProjects from "@/components/home/projects";
import Services from "@/components/home/services";
import Skills from "@/components/home/tech-stack-skill";
import WorkingProcesses from "@/components/home/working-process/working-process";
import { LightModeAboutMeComponent } from "@/components/light-mode-about-me";

export default function Home() {
  return (
    <>
      <Hero />
      <LightModeAboutMeComponent />
      <Skills />
      <Services />
      <WorkingProcesses />
      <HomeProjects />
      <Blogs />
      <EnhancedContactSection />
    </>
  );
}
