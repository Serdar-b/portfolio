import React from "react";
import { Link as ScrollLink } from "react-scroll";

const MobileNav = ({
  onClose,
}: {
  onClose: () => void;
}) => {
  return (
    <div className="md:hidden fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex flex-col justify-center items-center z-20">
      <ul className="text-white text-center text-lg space-y-4">
        <li>
          <ScrollLink
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={onClose}
            className="cursor-pointer"
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
            onClick={onClose}
            className="cursor-pointer"
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
            onClick={onClose}
            className="cursor-pointer"
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
            onClick={onClose}
            className="cursor-pointer"
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
            onClick={onClose}
            className="cursor-pointer"
          >
            Contact
          </ScrollLink>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
