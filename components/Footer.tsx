import React from "react";
import ShimmerButton from "./ui/ShimmerButton";
import { FaConnectdevelop, FaLink, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer id="contact" className="pt-20">
      <h1 className="text-center font-bold text-4xl md:text-5xl">
        Let’s Connect and <br />
        <span className="text-purple-300"> Stay in Touch</span>
      </h1>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-center text-sm text-gray-300/80 mt-7 mx-auto max-w-md">
          I’m always excited to expand my network and learn from others. Whether
          you want to connect on LinkedIn or reach out via email, let’s keep the
          conversation going!
        </h2>
        <a href="#about">
          <ShimmerButton
            title="Let's Connect!"
            icon={<FaLink />}
            position="right"
          />
        </a>
      </div>

      <div className="flex flex-row justify-between w-full py-20">
        <p className="text-sm">Copyright @ 2024 Serdar Bulun</p>
      </div>
    </footer>
  );
};

export default Footer;
