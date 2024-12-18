import { ChildrenProp, Href } from "@/types/general";
import classNames from "classnames";
import Link from "next/link";
import React, { FC } from "react";
import { FaChevronRight } from "react-icons/fa";

type Props = {
  href: Href;
  className?: string;
} & ChildrenProp;

const ButtonLink: FC<Props> = ({ href, className = undefined, children }) => {
  return (
    <Link
      href={href}
      className={classNames(
        className,
        "px-4 py-2 rounded-md bg-app-white text-app-black font-bold transition-colors duration-100 hover:bg-app-white/90 flex items-center w-fit whitespace-nowrap"
      )}
    >
      {children}

      <FaChevronRight className="inline-block ml-2" />
    </Link>
  );
};

export default ButtonLink;
