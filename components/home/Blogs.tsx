"use client";
import { blogs } from "@/data/blogs";
import { motion, stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";

import { ExternalLink } from "lucide-react";
import BlogCard from "../blogs/BlogCard";
import { Button } from "../ui/button";

interface Blog {
  host: { link: string };
  title: string;
  image: string;
  description: string;
  date: string;
  time: string;
}

export default function Blogs() {
  const [blogScope, BlogAnimate] = useAnimate();
  const blogStaggerList = stagger(0.2, { startDelay: 1.3 });

  useEffect(() => {
    BlogAnimate(
      "article",
      { opacity: 1, scale: 1, x: 0 },
      {
        duration: 0.2,
        delay: blogStaggerList,
      }
    );
  }, [blogStaggerList, BlogAnimate]);

  return (
    <section className="py-10 max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold text-[var(--primary-title)]">
          Blogs
        </h2>
        <Button
          variant="outline"
          className="border-[var(--primary-button)] text-[var(--primary-button)] hover:bg-[var(--primary-button)] hover:text-white rounded-full"
        >
          All Blogs
          <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </div>
      <motion.div
        className="py-10 gap-y-12 gap-x-7 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
        ref={blogScope}
        transition={{ delay: 1.3 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {blogs?.slice(0, 3).map((blog: Blog, index: number) => (
          <motion.article
            key={index}
            style={{ opacity: 0, scale: 0.3, x: -50 }}
          >
            <BlogCard blog={blog} key={index} />
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
