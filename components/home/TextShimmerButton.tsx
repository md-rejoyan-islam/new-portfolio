import { ReactNode } from "react";

interface TextShimmerButtonProps {
  duration?: number;
  icon?: ReactNode;
  title: string;
  children?: ReactNode;
  width?: string;
}

export default function TextShimmerButton({
  duration,
  icon,
  title,
  children,
  width,
}: TextShimmerButtonProps) {
  return (
    <button
      className={`flex group  justify-start font-semibold text-sm sm:text-base   uppercase py-2 px-3.5 rounded-md items-center text-[#fff] bg-[#583cea]   dark:bg-[#0ac7ff] gap-2.5 ${
        icon && "transition-all duration-300 "
      }${width ? width : "w-full"}
          `}
    >
      <TextShimmer duration={duration || 1.2}>{title}</TextShimmer>
      {children}
    </button>
  );
}
