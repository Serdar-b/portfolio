import React from "react";
import { Link as ScrollLink } from "react-scroll";

const DesktopNav = () => {
  return (
    <ul className="hidden md:flex justify-center items-center gap-x-12 w-full">
      <li>
        <ScrollLink
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="hover:text-purple-400 transition-colors duration-400 cursor-pointer"
        >
          Home
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          to="projects"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="hover:text-purple-400 transition-colors duration-400 cursor-pointer"
        >
          Projects
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          to="experiences"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="hover:text-purple-400 transition-colors duration-400 cursor-pointer"
        >
          Experiences
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="hover:text-purple-400 transition-colors duration-400 cursor-pointer"
        >
          About
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="hover:text-purple-400 transition-colors duration-400 cursor-pointer"
        >
          Contact
        </ScrollLink>
      </li>
    </ul>
  );
};

export default DesktopNav;
