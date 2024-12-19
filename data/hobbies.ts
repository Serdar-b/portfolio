import { GiGuitar } from "react-icons/gi";
import { IoBookSharp } from "react-icons/io5";
import { FaGamepad } from "react-icons/fa";
import { GiWeightLiftingUp } from "react-icons/gi";

export interface Hobbies {
    title: string;
    description: string;
    icon: React.ElementType;
}

const hobbies = [
  {
    title: "Music",
    description: "I enjoy playing the guitar and listening to music in my free time.",
    icon: GiGuitar,
  },
  {
    title: "Gaming",
    description: "I like video games, especially story-driven adventures and competitive multiplayer games.",
    icon: FaGamepad,
  },
  {
    title: "Fitness",
    description: "Staying active through weight training and regular exercise is an important part of my daily routine.",
    icon: GiWeightLiftingUp,
  },
  {
    title: "Reading",
    description: "I enjoy reading books from different genres, including both fiction and non-fiction.",
    icon: IoBookSharp,
  },
];

export default hobbies;
