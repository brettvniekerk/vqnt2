import { ChildrenProp } from "@/types/general";
import classNames from "classnames";
import React, { FC } from "react";

type Props = {
  className?: string;
} & ChildrenProp;

const AppSection: FC<Props> = ({ className = undefined, children }) => {
  return (
    <section className={classNames("w-full py-10 lg:py-16", className)}>
      {children}
    </section>
  );
};

export default AppSection;
