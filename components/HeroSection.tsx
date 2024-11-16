import React from "react";
import { StarsBackground } from "./ui/StarsBackground";
import { TextGenerateEffect } from "./ui/TestGenerateEffect";
import ShimmerButton from "./ui/ShimmerButton";
import { FaBriefcase } from "react-icons/fa";
import { ShootingStars } from "./ui/ShootingStars";
const HeroSection = () => {
  return (
    <div className="pb-20 pt-20">
      <ShootingStars
        starWidth={12}
        starHeight={2}
        minDelay={2000}
        maxDelay={4000}
      />
      <StarsBackground />
      <div className="flex justify-center relative my-8 z-10">
        <div className="max-w-[90v] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h1 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Experiences Powered by <br />
            <span className="text-purple-500">Next.js</span> and{" "}
            <span className="text-purple-500">Vercel</span>
          </h1>
          <TextGenerateEffect
            className=" text-center text-[40px] md:text-5xl lg:text-6xl "
            words="Bringing Ideas to life with impact"
          />

          <p className="text-center max-w-md md:max-w-md md:tracking-wider mb-8 text-sm md:text-lg lg:text-xl opacity-80">
            Hi, I&apos;m Serdar, a developer based in Sweden with a passion for
            turning innovative ideas into reality.
          </p>

          <ShimmerButton
            title="My Work"
            icon={<FaBriefcase />}
            position="right"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
