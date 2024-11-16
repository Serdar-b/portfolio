import React from "react";
import { PinContainer, PinPerspective } from "./ui/3dPin";
import { ShootingStars } from "./ui/ShootingStars";
import { StarsBackground } from "./ui/StarsBackground";

const Projects = () => {
  return (
    <div className="my-20">
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
    </div>
  );
};

export default Projects;
