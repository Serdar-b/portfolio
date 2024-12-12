export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#about" },
];

export const myProjects = [
  {
    id: 1,
    title: "Calisthenics-NextGen",
    description:
      "A fitness app using machine learning and computer vision to track exercises and provide feedback.",
    img: "/cali.png",
    link: "https://github.com/Serdar-b/calisthenics-nextgen",
    stack: [
      "/icons/projects/javascript.svg",
      "/icons/projects/python.svg",
      "/icons/projects/postgresql.svg",
      "/icons/projects/nodejs.svg",
      "/icons/projects/tensorflow.svg",
      "/icons/projects/html-5.svg",
      "/icons/projects/css-3.svg",
    ],
  },
  {
    id: 2,
    title: "RecruitmentSystem",
    description:
      "A recruitment system for course project featuring account creation, job applications, and admin functionalities.",
    img: "/recruit.png",
    link: "https://github.com/Serdar-b/IV1201-Project",
    stack: [
      "/icons/projects/react.svg",
      "/icons/projects/nodejs.svg",
      "/icons/projects/postgresql.svg",
    ],
  },
  {
    id: 3,
    title: "Fitness Zone (Work In Progress)",
    description: "A fitness web app to track your workouts and craft new ones.",
    img: "intern.png",
    link: "",
    stack: [
      "/icons/projects/nextjs.svg",
      "/icons/projects/ts.svg",
      "/icons/projects/react.svg",
    ],
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Intern - Ericsson",
    desc: "Contributing to the development of projects focused on Artificial Intelligence/Machine Learning and IoT devices.",
    className: "md:col-span-2",
    thumbnail: "/intern.png",
  },
  {
    id: 2,
    title: "Cashier and Café Worker - Matvärlden",
    desc: "Managed stress and maintained a stable schedule while working as a cashier, café worker, and stock manager.",
    className: "md:col-span-2",
    thumbnail: "/cashier.png",
  },
];

import JsIcon from "@/public/icons/js.svg";
import HtmlIcon from "@/public/icons/html5.svg";
import CssIcon from "@/public/icons/css3.svg";
import PythonIcon from "@/public/icons/python.svg";
import JavaIcon from "@/public/icons/java.svg";
import CIcon from "@/public/icons/clang.svg";
import PostgreSqlIcon from "@/public/icons/postgresql.svg";
import ReactIcon from "@/public/icons/react.svg";
import NextJsIcon from "@/public/icons/nextjs.svg";
import GithubIcon from "@/public/icons/github.svg";

export const toolBox = [
  { title: "Javascript", icon: JsIcon },
  { title: "HTML5", icon: HtmlIcon },
  { title: "CSS3", icon: CssIcon },
  { title: "Python", icon: PythonIcon },
  { title: "Java", icon: JavaIcon },
  { title: "C", icon: CIcon },
  { title: "PostgreSQL", icon: PostgreSqlIcon },
  { title: "React", icon: ReactIcon },
  { title: "NextJS", icon: NextJsIcon },
  { title: "Github", icon: GithubIcon },
];
