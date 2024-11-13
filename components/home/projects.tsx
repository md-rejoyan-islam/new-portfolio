"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ExternalLink, Figma, Github } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

export default function HomeProjects() {
  const projects = [
    {
      title: "TRAFALGAR - Online Medical Service",
      description:
        "Trafalgar is a landing page for an online medical service that provides a range of health services, including online consultations, appointments, and medical advice. The landing page is designed to be user-friendly, informative, and visually appealing, with a focus on accessibility and ease of use.",
      image: "/images/projects/bizpro.png",
      technologies: ["HTML", "CSS", "JavaScript", "Figma"],
      links: {
        github: "#",
        live: "#",
        figma: "#",
      },
    },
    {
      title: "POSITIVUS - Digital Marketing Agency",
      description:
        "Positivus is a landing page for a digital marketing agency that offers a range of services, including social media marketing, content creation, and search engine optimization. The landing page is designed to be visually appealing, informative, and user-friendly, with a focus on showcasing the agency's services.",
      image: "/images/projects/bizpro.png",
      technologies: ["HTML", "CSS", "JavaScript", "Figma"],
      links: {
        github: "#",
        live: "#",
        figma: "#",
      },
    },
    {
      title: "Bizpro - Business Promotion Solution",
      description:
        "Bizpro is a landing page for a business promotion solution that offers a range of services, including social media marketing, content creation, and search engine optimization. The landing page is designed to be visually appealing, informative, and user-friendly, with a focus on showcasing the solution's services.",
      image: "/images/projects/bizpro.png",
      technologies: ["HTML", "CSS", "JavaScript", "Figma"],
      links: {
        github: "#",
        live: "#",
        figma: "#",
      },
    },
    {
      title: "Tasty Food",
      description:
        "Delicious Food offers high-quality, tasty burgers with premium ingredients, top-notch services, and a streamlined order and delivery process.",
      image: "/images/projects/bizpro.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      links: {
        github: "#",
        live: "#",
      },
    },
  ];

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl font-bold text-[var(--primary-title)]">
          Projects
        </h2>
        <Button
          variant="outline"
          className="border-[var(--primary-button)] text-[var(--primary-button)] hover:bg-[var(--primary-button)] hover:text-white rounded-full"
        >
          ALL PROJECTS
          <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <div className="space-y-20">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Connecting Line */}
            {index !== projects.length - 1 && (
              <div className="absolute left-1/2 top-full h-20 w-px border-l-2 border-dashed border-[#583cea]/30" />
            )}

            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div
                  className={`grid md:grid-cols-2 gap-8 ${
                    index % 2 === 0 ? "" : "md:grid-flow-dense"
                  }`}
                >
                  <div className="relative group overflow-hidden">
                    <Image
                      width={800}
                      height={500}
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover aspect-video group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <a
                        href={project.links.live}
                        className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        View Project
                      </a>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <p className="text-gray-600 mb-6">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-[var(--secondary-button)] text-[var(--primary-button)] hover:bg-[var(--secondary-hover-button)]"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.links.github}
                        className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        aria-label="View GitHub Repository"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                      <a
                        href={project.links.live}
                        className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        aria-label="View Live Site"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                      {project.links.figma && (
                        <a
                          href={project.links.figma}
                          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                          aria-label="View Figma Design"
                        >
                          <Figma className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
