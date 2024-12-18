import { ChildrenProp, Href } from "@/types/general";
import Link from "next/link";
import React, { FC } from "react";

type Props = {
  href: Href;
} & ChildrenProp;

const AppLink: FC<Props> = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="w-fit hover:underline underline-offset-2 decoration-app-white hover:text-app-white transition-colors duration-100"
    >
      {children}
    </Link>
  );
};

export default AppLink;
