import { SITE_TITLE } from "@/constants/general";
import Link from "next/link";
import React, { FC } from "react";

const TitleLink: FC = () => {
  return (
    <Link href="/" className="font-lato font-black text-xl text-app-white">
      {SITE_TITLE}
    </Link>
  );
};

export default TitleLink;
