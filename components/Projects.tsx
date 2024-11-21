import React from "react";
import { PinContainer, PinPerspective } from "./ui/3dPin";
import { ShootingStars } from "./ui/ShootingStars";
import { StarsBackground } from "./ui/StarsBackground";
import { myProjects } from "@/data";
import { div } from "framer-motion/client";
import { FaLocationArrow } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="py-20" id="projects">
      <ShootingStars
        starWidth={12}
        starHeight={2}
        minDelay={2000}
        maxDelay={4000}
      />
      <StarsBackground />
      <h1 className="text-center font-bold text-4xl md:text-5xl">
        My recent <span className="text-purple-300">Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {myProjects.map(({ id, title, description, img, link, stack }) => (
          <div
            key={id}
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw] "
          >
            <PinContainer title={link} href="www.google.com">
              <div
                className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh]
              mb-10"
              >
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <img src="" alt="" />
                </div>
                <img src={img} alt={title} className="z-10 absolute bottom-0" />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {description}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {stack.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{ transform: `tranlateX(-${5 * index * 2}[px])` }}
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple-500">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
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
