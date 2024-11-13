"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Code, Database, Globe, Layout, Search, Server } from "lucide-react";

export default function Services() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8  relative bg-[url('/images/bg_footer.png')] bg-cover   bg-no-repeat ">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-incognito text-text-root text-center pb-4 text-[#292875] text-4xl font-semibold tracking-tight">
          My Services
        </h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10"
        >
          {[
            {
              icon: <Layout className="w-6 h-6" />,
              title: "Front-End",
              description:
                "Building responsive and interactive user interfaces with React and Next.js",
            },
            {
              icon: <Server className="w-6 h-6" />,
              title: "Back-End",
              description:
                "Developing robust server-side applications with Node.js and Express",
            },
            {
              icon: <Globe className="w-6 h-6" />,
              title: "Hosting",
              description:
                "Deploying and managing applications on cloud platforms",
            },
            {
              icon: <Database className="w-6 h-6" />,
              title: "Database Management",
              description:
                "Designing and optimizing database structures for performance",
            },
            {
              icon: <Code className="w-6 h-6" />,
              title: "Firebase",
              description:
                "Implementing real-time features and authentication with Firebase",
            },
            {
              icon: <Search className="w-6 h-6" />,
              title: "SEO",
              description:
                "Optimizing websites for better search engine visibility",
            },
          ].map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-shadow duration-300   backdrop-blur-sm bg-white/50"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-rose-100 to-pink-100 flex items-center justify-center text-rose-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-500">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
