"use client";
import hobbies, { type Hobbies } from "@/data/hobbies";
import React, { useState } from "react";

const Hobbies = () => {
  const [hoveredHobby, setHoveredHobby] = useState<Hobbies | null>(null);

  return (
    <div className="relative flex items-center justify-center h-[280px] w-[300px] ">

      {/* Globe in the center */}
      <div className="relative flex items-center justify-center mr-2">
        <img
          src="./earth.png"
          alt="Globe"
          className="w-32 h-32 object-contain opacity-70"
        />
        {/* Glow Effect */}
        <div className="absolute inset-0 left-[11px] top-[3px] w-28 h-28 rounded-full bg-blue-500 blur-lg opacity-30" />
      </div>

      {/* Infinite Carousel */}
      <div
        className={`absolute h-full w-full animate-spin-slow ${
          hoveredHobby ? "animation-pause" : ""
        }`}
      >
        {hobbies.map((hobby: Hobbies, index: number) => {
          const angle = (360 / hobbies.length) * index;
          const x = 110 * Math.cos((angle * Math.PI) / 180);
          const y = 110 * Math.sin((angle * Math.PI) / 180);

          return (
            <div
              key={index}
              className="absolute"
              style={{
                top: `calc(50% + ${y}px)`,
                left: `calc(50% + ${x}px)`,
                transform: `translate(-50%, -50%)`,
              }}
              onMouseEnter={() => setHoveredHobby(hobby)}
              onMouseLeave={() => setHoveredHobby(null)}
            >
              <div
                className={`animate-counter-spin ${
                  hoveredHobby ? "animation-pause" : ""
                }`}
              >
                <div className="flex flex-col items-center">
                  <hobby.icon className="text-4xl text-purple-300 cursor-pointer" />
                  <p className="text-sm text-purple-300/70 mt-1">
                    {hobby.title}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Hover Description Box */}
      {hoveredHobby && (
        <div className="absolute top-[-125px] text-center bg-gray-800 text-white p-4 rounded-md shadow-lg transition-opacity">
          <h3 className="text-lg font-bold">{hoveredHobby.title}</h3>
          <p className="text-sm">{hoveredHobby.description}</p>
        </div>
      )}
    </div>
  );
};

export default Hobbies;
