"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Code, Database, FileJson, Globe, Server } from "lucide-react";
import { useState } from "react";

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
        <h2 className="text-3xl font-bold text-center mb-8 text-[var(--primary-title)]  dark:text-white">
          My Tech Stack
        </h2>

        <div className="flex justify-center space-x-4 mb-8">
          {["All", "Frontend", "Backend"].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === category
                  ? "bg-[var(--primary-button)] text-white"
                  : "bg-[var(--secondary-button)] hover:bg-[var(--secondary-hover-button)] text-gray-800  dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredSkills.map((skill) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              isActive={activeSkill === skill.name}
              onClick={() =>
                setActiveSkill(activeSkill === skill.name ? null : skill.name)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
