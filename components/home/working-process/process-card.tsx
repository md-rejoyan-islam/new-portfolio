import { Card } from "@/components/ui/card";

import { motion } from "framer-motion";

export default function ProcessCard({
  step,
  index,
  data,
  handleTabClick,
}: {
  step: number;
  index: number;
  data: { title: string; description: string };
  handleTabClick: (index: number) => void;
}) {
  return (
    <Card className="h-full">
      <div
        className={`relative h-full overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg p-6 rounded-md ${
          step === index
            ? " border-l-4 border-l-[#e11d48]"
            : "hover:border-l-4 hover:border-l-[#e11d48]"
        }`}
        onClick={() => handleTabClick(index)}
      >
        <div className="flex items-center gap-4">
          <span
            className={` flex min-h-8 min-w-8 h-8 w-8 items-center justify-center rounded-full text-sm font-semibold
                        ${
                          step === index
                            ? "bg-[#e11d48] text-white"
                            : " bg-[#e11d48]/10 text-gray-600"
                        }`}
          >
            {index + 1}
          </span>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              {data.title}
            </h3>
            <p className="mt-1 text-sm text-gray-500">{data.description}</p>
          </div>
        </div>
        <div className="  h-full absolute left-0 top-0  rounded-sm w-full">
          <motion.div
            className=" bg-[#e11d48]/5 rounded-s-xl w-full h-full"
            initial={{ width: "0%" }}
            animate={{
              width: step === index ? "100%" : "0%",
            }}
            transition={{
              duration: step === index ? 4 : 0.3,
              ease: "linear",
            }}
          />
        </div>
      </div>
    </Card>
  );
}
