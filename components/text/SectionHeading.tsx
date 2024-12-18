import { ChildrenProp } from "@/types/general";
import classNames from "classnames";
import React, { FC } from "react";

type Props = {
  big?: boolean;
} & ChildrenProp;

const SectionHeading: FC<Props> = ({ big = undefined, children }) => {
  return (
    <h2
      className={classNames("font-lato lg:leading-[1.5]", {
        "text-3xl lg:text-6xl": !!big,
        "text-2xl lg:text-4xl": !big
      })}
    >
      {children}
    </h2>
  );
};

export default SectionHeading;
