"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { FlipWords } from "../ui/flip-words";
import { IconCloud } from "../ui/icon-cloud";

export default function Hero() {
  const bannerRef = useRef(null);
  const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
  ];
  const words = [
    "MERN Stack Developer",
    "Full Stack Developer",
    "Next.Js Expert",
  ];
  return (
    <div className=" pb-16 pt-[90px] px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-rose-50 to-sky-50">
      <div className="max-w-7xl mx-auto">
        <div className="   px-0 grid grid-cols-1 lg:grid-cols-5 overflow-hidden w-full">
          <div className="flex col-span-3 h-full justify-center lg:justify-start  items-center order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="text-5xl font-bold mb-6">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-rose-600 to-pink-600 text-transparent bg-clip-text">
                  Md. Rejoyan Islam
                </span>
              </h2>

              <motion.div
                className="overflow-hidden"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <FlipWords
                  words={words}
                  className={
                    "bg-clip-text inline-block overflow-hidden text-wrap text-[2em] sm:text-[3em] text-[var(--primary-title)] font-medium"
                  }
                />
              </motion.div>
              <h2 className="  text-[2em] sm:text-[3em] font-semibold text-[var(--primary-title)]  mb-6">
                <span className="text-text-secondary">
                  I build things for the web.
                </span>
              </h2>
              <p className="max-w-2xl mx-auto text-gray-500 mb-12">
                I&apos;m a full stack developer specializing in building and
                designing exceptional digital experiences. Currently, I&apos;m
                focused on building accessible, human-centered products.
              </p>
              <div className="flex items-center justify-center gap-4">
                <button className="px-6 py-3 rounded-full bg-gradient-to-r from-rose-600 to-pink-600 text-white font-medium hover:opacity-90 transition-opacity flex items-center gap-2">
                  View Projects <ArrowRight className="w-4 h-4" />
                </button>
                <button className="px-6 py-3 rounded-full border border-gray-200 text-gray-600 font-medium hover:border-gray-300 transition-colors">
                  Download CV
                </button>
              </div>
            </motion.div>
          </div>
          <div className="   lg:col-span-2 order-1 lg:order-2 flex w-full  items-center justify-center">
            <div className=" ">
              <IconCloud iconSlugs={slugs} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
