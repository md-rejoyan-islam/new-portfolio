import dynamic from "next/dynamic";
import { FC } from "react";

const DynamicLottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

interface ShowLottieFileProps {
  loop?: boolean;
  className?: string;
  src: object;
}

const ShowLottieFile: FC<ShowLottieFileProps> = ({
  loop = true,
  className,
  src,
}) => {
  return (
    <DynamicLottie loop={loop} animationData={src} className={className} />
  );
};

export default ShowLottieFile;
