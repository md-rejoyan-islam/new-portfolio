import { useMotionValue, useTransform, motion } from "framer-motion";
import { useState } from "react";

export default function Check({ children }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [15, -15]); // Reduced sensitivity for hover
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

  const [isHover, setIsHover] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const xPos = e.clientX - rect.left - rect.width / 2;
    const yPos = e.clientY - rect.top - rect.height / 2;

    x.set(xPos / 5);
    y.set(yPos / 5);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    // setIsHover(false);
  };

  return (
    <div
      className="w-full  flex items-center justify-center "
      style={{
        perspective: 2500,
      }}
    >
      <motion.div
        style={{ x, y, rotateX, rotateY, z: 100 }}
        onMouseMove={handleMouseMove}
        // onMouseEnter={() => setIsHover(true)}
        onMouseLeave={handleMouseLeave}
        className="w-full h-fit flex flex-col    cursor-grab overflow-hidden "
      >
        {children}
      </motion.div>
    </div>
  );
}
