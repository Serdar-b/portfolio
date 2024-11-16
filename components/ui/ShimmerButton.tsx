import React from "react";

const ShimmerButton = ({
  title,
  icon,
  position,
  handlePress,
  otherStyles,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handlePress?: () => void;
  otherStyles?: string;
}) => {
  return (
    // Button code
    <button
      className={`inline-flex gap-3 h-8 lg:h-10 text-xs lg:text-lg animate-shimmer items-center justify-center rounded-lg border border-slate-600 
  bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-5 lg:px-8 font-medium 
  text-slate-400 transition-colors focus:outline-none my-10 ${otherStyles}`}
    >
      {position === "left" && icon}
      {title}
      {position === "right" && icon}
    </button>
  );
};

export default ShimmerButton;
