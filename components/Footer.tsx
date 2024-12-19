"use client";
import React from "react";
import ShimmerButton from "./ui/ShimmerButton";
import { FaEnvelope } from "react-icons/fa6";
import { socials, Social } from "@/data/social";

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="pt-20">
      <h1 className="text-center font-bold text-4xl md:text-5xl pb-9">
        Contact me via <br />
        <span className="text-purple-300 mt-4 inline-block">Email</span>
      </h1>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-center text-sm text-gray-300/80 mt-7 mx-auto max-w-md">
          I’m always excited to expand my network and learn from others. Whether
          you want to connect on LinkedIn or reach out via email, let’s keep the
          conversation going!
        </h2>
        <a href="mailto:serdar-bulun@outlook.com">
          <ShimmerButton
            title="Reach out!"
            icon={<FaEnvelope size={14} />}
            position="right"
          />
        </a>
      </div>

      <div className="flex flex-row items-center justify-between w-full pt-20 pb-10">
        <p className="text-sm">Copyright @ 2024 Serdar Bulun</p>

        <div className="flex flex-row md:gap-x-4 gap-x-2">
          {socials.map(({ name, link, icon: Icon }: Social) => (
            <div
              key={name}
              className=" flex items-center justify-center border-2 border-white/15 rounded-lg p-2 cursor-pointer"
            >
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
              >
                <span className="text-2xl">
                  <Icon className="md:w-6 md:h-6 w-4 h-4" />
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
