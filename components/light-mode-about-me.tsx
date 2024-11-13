"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Award,
  Book,
  Briefcase,
  Camera,
  Code,
  Coffee,
  GraduationCap,
  Music,
  Palette,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function LightModeAboutMeComponent() {
  const [activeTab, setActiveTab] = useState("skills");

  const tabs = [
    { id: "skills", label: "Skills", icon: Code },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "interests", label: "Interests", icon: Music },
  ];

  const skills = [
    { name: "Web Development", icon: Code, level: 90 },
    { name: "UI/UX Design", icon: Palette, level: 85 },
    { name: "Content Writing", icon: Book, level: 80 },
  ];

  const experiences = [
    {
      title: "Senior Web Developer",
      company: "Tech Innovators Inc.",
      period: "2019 - Present",
    },
    {
      title: "UI/UX Designer",
      company: "Creative Solutions Ltd.",
      period: "2017 - 2019",
    },
    {
      title: "Junior Developer",
      company: "StartUp Ventures",
      period: "2015 - 2017",
    },
  ];

  const education = [
    {
      degree: "Master of Computer Science",
      school: "Tech University",
      year: "2015",
    },
    {
      degree: "Bachelor of Design",
      school: "Creative Arts College",
      year: "2013",
    },
  ];

  const interests = [
    { name: "Music", icon: Music },
    { name: "Photography", icon: Camera },
    { name: "Coffee", icon: Coffee },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-pink-50/10 to-rose-100/10 text-gray-800 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-[#dd2466]">
            About Me
          </h2>
          <div className="w-20 h-1 bg-[#dd2466] mx-auto mb-8 rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative col-span-2 mx-10"
          >
            <div className="w-full  rounded-2xl overflow-hidden shadow-2xl">
              <Image
                width={400}
                height={400}
                src="/images/rejoyan.jpeg"
                alt="Rejoyan Islam"
                className=" h-full object-contain  w-full"
              />
            </div>
            <motion.div
              className="absolute -bottom-6 -right-6 bg-[#dd2466] text-white rounded-full p-6 shadow-lg"
              whileHover={{ scale: 1.1, rotate: 90 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <Award className="w-12 h-12" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="col-span-3"
          >
            <p className="text-lg mb-8 leading-relaxed text-gray-700">
              I&apos;m a full-stack web developer with a passion for creating
              impactful digital experiences. My journey began with JavaScript
              and Python, and I&apos;ve since mastered both SQL and NoSQL
              databases, ensuring efficient data solutions.
            </p>
            <p className="text-lg mb-8 leading-relaxed text-gray-700">
              I specialize in React.js with Next.js for modern, user-friendly
              interfaces, utilizing Redux for state management, and Node.js for
              robust server-side development. I also build APIs using RESTful or
              GraphQL approaches.
            </p>
            <p className="text-lg mb-8 leading-relaxed text-gray-700">
              I&apos;m always eager to learn and adapt to new technologies, and
              I&apos;m excited about the potential of tech to solve problems and
              enhance user experiences.
            </p>
            <motion.a
              href="#contact"
              className="inline-block bg-[#dd2466] text-white font-bold py-3 px-8 rounded-full  transition-transform duration-200 ease-in-out hover:bg-[#c51f59]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let&apos;s Connect
            </motion.a>
          </motion.div>
        </div>

        <div className="mt-24">
          <div className="flex justify-center mb-12 flex-wrap gap-2 sm:gap-4">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                className={`flex items-center text-xs sm:text-sm px-6 py-3 rounded-full font-semibold mr-4 ${
                  activeTab === tab.id
                    ? "bg-[#dd2466] text-white"
                    : "bg-[var(--secondary-button)] text-gray-700"
                }`}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <tab.icon className="w-5 h-5 mr-2" />
                {tab.label}
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === "skills" && (
                <div className="grid md:grid-cols-2 gap-8">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="bg-white rounded-xl p-6 shadow-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div className="flex items-center mb-4">
                        <skill.icon className="w-8 h-8 text-[#dd2466] mr-3" />
                        <h4 className="text-xl font-semibold text-gray-800">
                          {skill.name}
                        </h4>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <motion.div
                          className="bg-[#dd2466] h-4 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeTab === "experience" && (
                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={exp.title}
                      className="bg-white rounded-xl p-6 shadow-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <h4 className="text-xl font-semibold mb-2 text-gray-800">
                        {exp.title}
                      </h4>
                      <p className="text-[#dd2466] mb-2">{exp.company}</p>
                      <p className="text-sm text-gray-600">{exp.period}</p>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeTab === "education" && (
                <div className="space-y-8">
                  {education.map((edu, index) => (
                    <motion.div
                      key={edu.degree}
                      className="bg-white rounded-xl p-6 shadow-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <h4 className="text-xl font-semibold mb-2 text-gray-800">
                        {edu.degree}
                      </h4>
                      <p className="text-[#dd2466] mb-2">{edu.school}</p>
                      <p className="text-sm text-gray-600">{edu.year}</p>
                    </motion.div>
                  ))}
                </div>
              )}
              {activeTab === "interests" && (
                <div className="flex justify-center space-x-8">
                  {interests.map((interest, index) => (
                    <motion.div
                      key={interest.name}
                      className="flex flex-col items-center"
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <div className="bg-[#dd2466] text-white rounded-full p-4 mb-4">
                        <interest.icon className="w-8 h-8" />
                      </div>
                      <span className="text-lg font-medium text-gray-700">
                        {interest.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
