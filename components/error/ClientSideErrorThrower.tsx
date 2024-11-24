"use client";

import { ServerActionError } from "@/types/general";
import { FC } from "react";

type Props = {
  error: ServerActionError;
};

const ClientSideErrorThrower: FC<Props> = ({ error }) => {
  throw new Error(error.error);
};

export default ClientSideErrorThrower;
