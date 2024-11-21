import React from "react";
import Card from "./Card";
import { toolBox } from "@/data";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="text-center font-bold text-4xl md:text-5xl">
        About <span className="text-purple-300">Me</span>
      </h1>
      <Card
        title="Skills"
        description="Explore the technologies I use to to craft exceptional digital experiences."
      >
        {toolBox.map((item) => (
          <div key={item.title} className="inline-flex items-center">
            <img src={item.icon} alt="Icon Type" height={50} width={50} />
            <span>{item.title}</span>
          </div>
        ))}
      </Card>
    </div>
  );
};

export default About;
