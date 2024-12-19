import React from "react";

const Card = ({
  title,
  description,
  children,
  extraClasses,
  cardClasses,
}: {
  title: string;
  description: string;
  children?: React.ReactNode;
  extraClasses?: string;
  cardClasses?: string;
  heightAndWidth?: string;
}) => {
  return (
    <div
      className={`flex flex-col ${cardClasses} outline outline-2 outline-white/10 rounded-lg bg-gray-500/10 mt-10 max-w-[400px] sm:max-w-[600px]`}
    >
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
        <p className="text-white/40 text-sm pt-2 break-words whitespace-normal">{description}</p>
      </div>
      <div className={`${extraClasses}`}>{children}</div>
    </div>
  );
};

export default Card;
