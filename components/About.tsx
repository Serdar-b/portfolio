import React from "react";
import Card from "./Card";
import ToolBox from "./ToolBox";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 mb">
      <h1 className="text-center font-bold text-4xl md:text-5xl ">
        About <span className="text-purple-300">Me</span>
      </h1>
      <Card
        title="Skills"
        description="Explore the technologies I use to to craft exceptional digital experiences."
        extraClasses="mb-10"
      >
        <ToolBox itemsClassName="-translate-x-1/2 animate-move-left-anim [animation-duration:35s]" />
        <ToolBox itemsClassName="-translate-x-1/2 animate-move-right-anim [animation-duration:20s] " />
      </Card>
    </div>
  );
};

export default About;
