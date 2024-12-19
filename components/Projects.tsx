"use client";
import React from "react";
import { PinContainer } from "./ui/3dPin";
import { myProjects } from "@/data/projects";
import { FaLocationArrow } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="py-24 relative z-10" id="projects">
      <h1 className="text-center font-bold text-4xl md:text-5xl pb-20">
        My recent <span className="text-purple-300">Projects</span>
      </h1>
      <div className="flex flex-wrap flex-col md:flex-row items-center justify-center gap-6 px-6">
        {myProjects.map(({ id, title, description, img, link, stack }) => (
          <div
            key={id}
            className="flex flex-col items-center justify-center w-full max-w-[500px] max-h-[700px] rounded-2xl overflow-hidden"
          >
            <PinContainer title={link} href={link} className="w-full h-full">
              <div className="relative w-full max-h-[250px] bg-gray-800 rounded-2xl overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  className="z-10 w-full h-full object-cover rounded-2xl"
                />
              </div>
              <h1 className="font-bold text-lg mt-4">{title}</h1>
              <p className="text-sm font-light text-gray-300 my-5">
                {description}
              </p>
              <div className="flex flex-wrap gap-y-4 items-center justify-between mt-2 w-full">
                <div className="flex items-center">
                  {stack.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.3] rounded-full bg-black w-8 h-8 flex justify-center items-center"
                      style={{ transform: `translateX(-${10 * index}px)` }}
                    >
                      <img src={icon} alt={icon} className="p-1.5" />
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between gap-x-2">
                  <p className="text-sm text-purple-500">Check Live Site</p>
                  <FaLocationArrow className="ms-2" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
