"use client"
import Link from "next/link";
import React from "react";
import { IoMenu } from "react-icons/io5";
import GradientSvg from "./ui/Gradient";

const Navigation = () => {
  const test = () => {
    console.log("Hello");
  };

  return (
    <div className="w-full border-b border-white/25">
      <GradientSvg />
      <nav className="container pt-3">
        <div className="flex justify-between items-center">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
          <div>
            <button onClick={test}>
              <IoMenu
                style={{ stroke: "url(#gradient)" }}
                className="w-10 h-10"
              />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
