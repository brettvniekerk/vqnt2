import { ChildrenProp } from "@/types/general";
import React, { FC } from "react";

const PageTitle: FC<ChildrenProp> = ({ children }) => {
  return (
    <h1 className="font-lato text-3xl lg:text-6xl lg:leading-[1.5]">
      {children}
    </h1>
  );
};

export default PageTitle;
