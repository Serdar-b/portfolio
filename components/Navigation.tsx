"use client";
import React, { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoCloseCircleOutline } from "react-icons/io5";
import GradientSvg from "./Gradient";
import { clsx } from "clsx";
import MobileNav from "@/components/MobileNav";
import DesktopNav from "@/components/DesktopNav";

const Navigation = () => {
  const [isPressed, setIsPressed] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleIsPressed = () => {
    setIsPressed(!isPressed);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={clsx(
          "fixed left-1/2 top-0 z-50 -translate-x-1/2 w-full mx-auto backdrop-blur-sm transition-all duration-200",
          isScrolled ? "px-4 md:py-3 md:px-6 bg-black/10" : "pt-2 pr-4 md:p-6",
          "border-b max-w-md md:max-w-2xl lg:max-w-4xl border-white/25"
        )}
      >
        <GradientSvg id="grade" colorFrom="#27164a" colorTo="#9163F9" />
        <GradientSvg id="gradeClose" colorFrom="#75499e" colorTo="#9163F9" />
        <nav aria-label="Main navigation">
          <div className="flex justify-end md:justify-between items-center gap-x-2">
            {/* Desktop Navigation */}
            <DesktopNav />

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={handleIsPressed} aria-label="Toggle menu">
                {isPressed ? (
                  <IoCloseCircleOutline
                    style={{ stroke: "url(#gradeClose)" }}
                    className="w-10 h-10"
                    opacity={0.7}
                  />
                ) : (
                  <IoMenu
                    style={{ stroke: "url(#grade)" }}
                    className="w-10 h-10"
                  />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Overlay */}
      <div
        className={clsx(
          "md:hidden fixed inset-0 z-40 transition-opacity duration-700",
          isPressed
            ? "opacity-100 backdrop-blur-sm pointer-events-auto"
            : "opacity-0 backdrop-blur-0 pointer-events-none"
        )}
      >
        <MobileNav onClose={handleIsPressed} />
      </div>
    </>
  );
};

export default Navigation;
