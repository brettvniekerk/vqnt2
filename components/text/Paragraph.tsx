import { ChildrenProp } from "@/types/general";
import classNames from "classnames";
import React, { FC } from "react";

type Props = {
  wide?: boolean;
  white?: boolean;
  left?: boolean;
} & ChildrenProp;

const Paragraph: FC<Props> = ({
  wide = undefined,
  white = undefined,
  left = undefined,
  children
}) => {
  return (
    <p
      className={classNames("mt-10 lg:text-lg px-4", {
        "lg:px-[15%]": !!wide,
        "lg:px-[25%]": !wide,
        "text-app-white": !!white,
        "text-app-white/50": !white,
        "text-left": !!left
      })}
    >
      {children}
    </p>
  );
};

export default Paragraph;
