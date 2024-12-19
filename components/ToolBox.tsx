
import { toolBox } from "@/data";
import React, { Fragment } from "react";
import Icon from "./Icon";

const ToolBox = ({ itemsClassName }: { itemsClassName?: string }) => {

  return (
    <div className="flex mt-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className={`flex flex-none py-2 gap-6 pr-8 ${itemsClassName}`}>
        {[...new Array(2)].fill(0).map((_, index) => (
          <Fragment key={index}>
            {toolBox.map((item) => (
              <div
                key={item.title}
                className="inline-flex items-center gap-6 py-1 px-3 outline outline-2 outline-white/10 rounded-lg"
              >
                <Icon component={item.icon} />
                <span className="font-semibold">{item.title}</span>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default ToolBox;
