"use client";
import { workExperience } from "../data";
import React from "react";
import { Button } from "./ui/movingBorder";
import Image from "next/image";
const Experience = () => {
  return (
    <div
      className="flex flex-col justify-center items-center py-20"
      id="experiences"
    >
      <h1 className="text-center font-bold text-4xl md:text-5xl pb-20 mr-3">
        <span className="text-white">
          Work <span className="text-purple-300">Experience</span> and{" "}
          <span className="text-purple-300">Education</span>
        </span>
      </h1>
      <div className="flex flex-col justify-center items-center gap-2 max-w-[600px] sm:max-w-[800px]">
        {workExperience.map((card) => (
          <React.Fragment key={card.id}>
            {/* Card */}
            <Button
              borderRadius="1.75rem"
              className="flex-1 text-white border-neutral-200 dark:border-slate-800 p-3"
              duration={Math.floor(Math.random() * 10000) + 10000}
            >
              <div className="flex items-center md:flex-row flex-col md:items-center p-3 py-6 md:p-5 lg:p-4 gap-2">
                <Image
                  src={card.thumbnail}
                  alt={card.thumbnail}
                  width={72}
                  height={72}
                  quality={100}
                  className="object-contain"
                />
                <div className="lg:ms-5">
                  <h1 className="text-start text-xl md:text-2xl font-bold">
                    {card.title}
                  </h1>
                  <h2 className="text-start pt-2 text-gray-100/50 text-sm font-thin">
                    {card.date}
                  </h2>
                  <p className="text-start text-white-100 mt-3 font-semibold">
                    {card.desc}
                  </p>
                </div>
              </div>
            </Button>
            <div className="flex flex-row items-center ml-16 justify-center gap-6">
              <div className="bg-white w-[1px] h-24 mx-auto" />
              <h1>{card.year}</h1>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Experience;
