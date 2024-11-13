"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SimpleButton, { SimpleButtonWithoutBg } from "../button/simple-button";
import { FlipWords } from "../ui/flip-words";
import { IconCloud } from "../ui/Icon-cloud";

export default function Hero() {
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
              <h2 className="text-5xl font-bold mb-6 text-[var(--primary-title)] ">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-[var(--gradient-button-from)] to-[var(--gradient-button-to)] text-transparent bg-clip-text">
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
                    "bg-clip-text inline-block overflow-hidden font-medium text-wrap text-[2em] sm:text-[3em] text-[var(--primary-title)] "
                  }
                />
              </motion.div>
              <h2 className="  text-[2em] sm:text-[3em] font-medium text-[var(--primary-title)]  mb-6">
                I build things for the web.
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-[var(--secondary-text)] mb-12">
                I&apos;m a full stack developer specializing in building and
                designing exceptional digital experiences. Currently, I&apos;m
                focused on building accessible, human-centered products.
              </p>
              <div className="flex items-center justify-center gap-4">
                <SimpleButton>
                  View Projects <ArrowRight className="w-4 h-4" />
                </SimpleButton>
                <SimpleButtonWithoutBg>Download CV</SimpleButtonWithoutBg>
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
