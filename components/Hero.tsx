"use client";
import React from "react";
import { TextGenerateEffect } from "./ui/TestGenerateEffect";
import ShimmerButton from "./ui/ShimmerButton";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div id="home" className="pb-20 pt-20">
      <div className="flex justify-center my-8">
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
            Hi, I&apos;m Serdar, a software engineer based in Sweden with a
            passion for turning innovative ideas into reality.
          </p>
          <div className="w-36 h-36 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden shadow-lg">
            <Image
              className="object-cover translate-y-[-15px]"
              src="/profile.jpg"
              width={192}
              height={192}
              alt="Selfie"
            />
          </div>

          <p className="text-center mt-10 max-w-md md:max-w-md md:tracking-wider text-sm md:text-lg lg:text-xl opacity-80">
            Connect with me on Linkedin
          </p>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/serdar-bulun-bb377320a/"
          >
            <ShimmerButton
              title="Connect"
              icon={<FaLinkedin size={23} />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
