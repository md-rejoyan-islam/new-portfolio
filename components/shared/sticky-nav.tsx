"use client";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

import { cn } from "@/lib/utils";
import Navbar from "./Navbar";

interface StickyNavProps {
  className?: string;
}

export const StickyNav: React.FC<StickyNavProps> = ({ className }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const previous = scrollYProgress.getPrevious();
      const direction = previous !== undefined ? current - previous : 0;

      if (scrollYProgress.get() === 1) {
        setVisible(true);
      } else if (scrollYProgress.get() < 0) {
        setVisible(false);
      } else {
        setVisible(direction <= 0);
      }
    }
  });

  return (
    <div className="h-[70px] w-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          ` ${
            visible ? "" : "shadow-none"
          } left-0 top-0 inset-x-0 w-[100vw] fixed   border-b    backdrop-blur-lg z-[500] items-center justify-center`,
          className
        )}
      >
        <Navbar />
      </motion.div>
    </div>
  );
};
