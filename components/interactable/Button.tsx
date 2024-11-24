"use client";

import { ChildrenProp } from "@/types/general";
import React, { FC, ButtonHTMLAttributes } from "react";
import { useFormStatus } from "react-dom";

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
      className="border border-oldschool-black rounded-[4px] bg-oldschool-gray hover:bg-oldschool-dark-gray px-3 pt-[2px] pb-[1px] block w-fit"
    >
      {children}
    </button>
  );
};

export default Button;
