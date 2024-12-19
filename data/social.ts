import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { IconType } from "react-icons";

export interface Social {
  name: string;
  link: string;
  icon: IconType;
}

export const socials: Social[] = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/serdar-bulun-bb377320a/",
    icon: FaLinkedin,
  },
  {
    name: "GitHub",
    link: "https://github.com/Serdar-b",
    icon: FaGithub,
  },
];
