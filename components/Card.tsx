import { desc } from "framer-motion/client";
import React from "react";

const Card = ({
  title,
  description,
  children,
  extraClasses,
}: {
  title: string;
  description: string;
  children?: React.ReactNode;
  extraClasses?: string;
  heightAndWidth?: string;
}) => {
  return (
    <div className="outline outline-2 outline-white/10 rounded-lg bg-gray-500/10 mt-10 max-w-[320px] sm:max-w-[600px]">
      <div className="flex flex-col px-10 mb-5">
        <div className="flex flex-row items-center justify-start gap-4 pt-4">
          <img
            src="/icons/gradient-star.svg"
            alt="star"
            height={35}
            width={35}
          />
          <h1 className="font-bold text-3xl tracking-wider ">{title}</h1>
        </div>
        <p className="text-white/40 text-sm pt-2">{description}</p>
      </div>
      <div className={`${extraClasses}`}>{children}</div>
    </div>
  );
};

export default Card;
