import React from "react";

const Icon = ({ component: Component }: { component: React.ElementType }) => {
  return (
    <div className="relative size-10">
      <Component className="fill-[url(#gradientId)] size-10" />
      <svg className="size-0 absolute">
        <defs>
          <linearGradient id="gradientId">
            <stop offset="0%" stopColor="#8A4FFF" />
            <stop offset="100%" stopColor="#5D3FD3" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Icon;