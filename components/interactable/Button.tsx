"use client";

import { ChildrenProp } from "@/types/general";
import React, { FC, ButtonHTMLAttributes } from "react";
import { useFormStatus } from "react-dom";
import { FaChevronRight } from "react-icons/fa";

type Props = Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "type" | "onClick" | "disabled"
> &
  ChildrenProp;

const Button: FC<Props> = ({
  children,
  type = undefined,
  onClick = undefined,
  disabled = false
}) => {
  const status = useFormStatus();

  return (
    <button
      type={type}
      disabled={status.pending || disabled}
      onClick={onClick}
      className="px-4 py-2 rounded-md bg-app-white/50 enabled:bg-app-white text-app-black font-bold transition-colors duration-100 enabled:hover:bg-app-white/90 flex items-center w-fit whitespace-nowrap"
    >
      {children}

      <FaChevronRight className="inline-block ml-2" />
    </button>
  );
};

export default Button;
