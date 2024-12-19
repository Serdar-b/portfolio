import React from "react";
import Card from "../Card";
import ToolBox from "../ToolBox";
import Hobbies from "../Hobbies";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center py-20 mb-10"
    >
      <h1 className="text-center font-bold text-4xl md:text-5xl pb-20 ">
        About <span className="text-purple-300">Me</span>
      </h1>
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <Card
          title="Hobbies"
          description="Explore my hobbies and interests outside of the technical world."
          extraClasses="mb-10"
          cardClasses="items-center justify-center lg:mr-10 w-[400px]"
        >
          <Hobbies />
        </Card>
        <Card
          title="Skills"
          description="Explore the technologies I use to to craft exceptional digital experiences."
          extraClasses="mb-10"
        >
          <ToolBox itemsClassName="-translate-x-1/2 animate-move-left-anim [animation-duration:35s]" />
          <ToolBox itemsClassName="-translate-x-1/2 animate-move-right-anim [animation-duration:20s] " />
        </Card>
      </div>
    </div>
  );
};

export default About;
