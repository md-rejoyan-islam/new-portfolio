"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import { Code, Database, FileJson, Globe, Server } from "lucide-react";
import { useState } from "react";
import { SubTitle, Title } from "./title";

interface Skill {
  name: string;
  icon: JSX.Element;
  color: string;
  category: string;
}

const skills = [
  {
    name: "HTML",
    icon: <Code />,
    color: "bg-orange-500",
    category: "Frontend",
  },
  { name: "CSS", icon: <Code />, color: "bg-blue-500", category: "Frontend" },
  {
    name: "JavaScript",
    icon: <FileJson />,
    color: "bg-yellow-500",
    category: "Frontend",
  },
  { name: "React", icon: <Code />, color: "bg-cyan-500", category: "Frontend" },
  { name: "Next.js", icon: <Globe />, color: "bg-black", category: "Frontend" },
  {
    name: "Prisma",
    icon: <Database />,
    color: "bg-indigo-500",
    category: "Backend",
  },
  {
    name: "Sequelize",
    icon: <Database />,
    color: "bg-blue-600",
    category: "Backend",
  },
  {
    name: "MongoDB",
    icon: <Database />,
    color: "bg-green-500",
    category: "Backend",
  },
  {
    name: "MySQL",
    icon: <Database />,
    color: "bg-blue-400",
    category: "Backend",
  },
  {
    name: "Express",
    icon: <Server />,
    color: "bg-gray-600",
    category: "Backend",
  },
];

const SkillCard = ({
  skill,
  isActive,
  onClick,
}: {
  skill: Skill;
  isActive: boolean;
  onClick: () => void;
}) => (
  <Card
    className={`cursor-pointer transition-all backdrop-blur-sm bg-transparent duration-300 ${
      isActive ? "ring-2 ring-offset-2 ring-blue-500 dark:ring-blue-400" : ""
    }`}
    onClick={onClick}
  >
    <CardContent className="p-4 flex flex-col items-center text-center">
      <div className={`p-3 rounded-full ${skill.color} text-white mb-3`}>
        {skill.icon}
      </div>
      <h3 className="text-base font-semibold mb-1">{skill.name}</h3>
      <Badge variant="secondary" className="text-xs">
        {skill.category}
      </Badge>
      {isActive && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="text-sm text-gray-600 dark:text-gray-300 mt-2"
        >
          {getSkillDescription(skill.name)}
        </motion.p>
      )}
    </CardContent>
  </Card>
);

const getSkillDescription = (skillName: string) => {
  const descriptions: { [key: string]: string } = {
    HTML: "Proficient in writing semantic HTML5 for structuring web content.",
    CSS: "Skilled in creating responsive layouts and animations with CSS3.",
    JavaScript: "Strong command of ES6+ features and asynchronous programming.",
    React: "Experienced in building complex UIs with React hooks and context.",
    "Next.js":
      "Adept at server-side rendering and creating optimized React applications.",
    Prisma: "Proficient in database modeling and ORM operations with Prisma.",
    Sequelize: "Experienced in using Sequelize for SQL database interactions.",
    MongoDB: "Skilled in designing and querying NoSQL databases with MongoDB.",
    MySQL: "Proficient in SQL query optimization and database design.",
    Express:
      "Experienced in building RESTful APIs and middleware with Express.",
  };
  return (
    descriptions[skillName as keyof typeof descriptions] ||
    "Skilled in utilizing this technology effectively."
  );
};

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [filter, setFilter] = useState("All");

  const filteredSkills =
    filter === "All"
      ? skills
      : skills.filter((skill) => skill.category === filter);

  return (
    <section className="py-16 px-4 bg-gray-50 bg-opacity-40 dark:bg-gray-900 relative ">
      <div className="w-full h-full absolute top-0 inset-x-0 bg-[url('/images/blur.png')] -z-10 opacity-10 "></div>
      <div className="max-w-6xl mx-auto">
        <Title title="My Tech Stack" />
        <SubTitle title="Here are some of the technologies I work with." />

        <div className="mt-10">
          <div className="flex justify-center mb-12 flex-wrap gap-2 sm:gap-2">
            {["All", "Frontend", "Backend"].map((category, index) => (
              <motion.button
                key={index}
                className={`flex items-center  text-xs sm:text-sm px-6 py-3 rounded-full font-semibold mr-4 ${
                  filter === category
                    ? "bg-[#dd2466] text-white"
                    : "bg-[var(--secondary-button)] text-[var(--primary-button)]"
                }`}
                onClick={() => setFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* <tab.icon className="w-5 h-5 mr-2" /> */}
                {category}
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {filter === "All" && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {filteredSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <SkillCard
                        key={skill.name}
                        skill={skill}
                        isActive={activeSkill === skill.name}
                        onClick={() =>
                          setActiveSkill(
                            activeSkill === skill.name ? null : skill.name
                          )
                        }
                      />
                      {/* <div className="w-full bg-gray-200 rounded-full h-4">
                        <motion.div
                          className="bg-[#dd2466] h-4 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                        /> 
                      </div> */}
                    </motion.div>
                  ))}
                </div>
              )}
              {filter === "Backend" && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {filteredSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <SkillCard
                        key={skill.name}
                        skill={skill}
                        isActive={activeSkill === skill.name}
                        onClick={() =>
                          setActiveSkill(
                            activeSkill === skill.name ? null : skill.name
                          )
                        }
                      />
                      {/* <div className="w-full bg-gray-200 rounded-full h-4">
                        <motion.div
                          className="bg-[#dd2466] h-4 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                        /> 
                      </div> */}
                    </motion.div>
                  ))}
                </div>
              )}
              {filter === "Frontend" && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {filteredSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <SkillCard
                        key={skill.name}
                        skill={skill}
                        isActive={activeSkill === skill.name}
                        onClick={() =>
                          setActiveSkill(
                            activeSkill === skill.name ? null : skill.name
                          )
                        }
                      />
                      {/* <div className="w-full bg-gray-200 rounded-full h-4">
                        <motion.div
                          className="bg-[#dd2466] h-4 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                        /> 
                      </div> */}
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
