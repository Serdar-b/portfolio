import React from "react";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";
import { TextGenerateEffect } from "./ui/text-generate-effect";
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
            Dynamic Web Experiences Powered by{" "}
            <span className="text-purple-500">Next.js</span> and{" "}
            <span className="text-purple-500">Vercel</span>
          </h1>
          <TextGenerateEffect
            className=" text-center md:text-5xl lg:text-6xl "
            words="Bringing Ideas to life with impact "
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl">
            Hi, I&apos;m Serdar, a developer based in Sweden with a passion for
            turning innovative ideas into reality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
