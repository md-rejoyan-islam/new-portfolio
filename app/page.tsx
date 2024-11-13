import { EnhancedContactSection } from "@/components/enhanced-contact-section";
import { AboutMe } from "@/components/home/about-me";
import Blogs from "@/components/home/Blogs";
import Hero from "@/components/home/hero";
import HomeProjects from "@/components/home/projects";
import Services from "@/components/home/services";
import Skills from "@/components/home/tech-stack-skill";
import WorkingProcesses from "@/components/home/working-process/working-process";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Skills />
      <Services />
      <WorkingProcesses />
      <HomeProjects />
      <Blogs />
      <EnhancedContactSection />
    </>
  );
}
