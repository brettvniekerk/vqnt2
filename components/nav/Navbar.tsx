import React, { FC } from "react";
import TitleLink from "./TitleLink";
import AppLink from "./AppLink";
import ButtonLink from "./ButtonLink";
import { Href } from "@/types/general";
import { formatRoute } from "@/utils/string";

const LINKS: Array<Href> = [];

const Navbar: FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full border-b border-app-white/10 py-2 px-4 lg:px-[15%] 3xl:px-[25%] flex items-center bg-app-black text-app-white">
      <TitleLink />

      <nav className="ml-16 3xl:ml-24 items-center gap-x-8 3xl:gap-x-12 mt-1 hidden lg:flex">
        {[...LINKS].map(l => (
          <AppLink key={l} href={l}>
            {formatRoute(l)}
          </AppLink>
        ))}
      </nav>

      <div className="ml-auto items-center gap-x-6 mt-1 hidden lg:flex">
        <ButtonLink href="/signup">Sign Up</ButtonLink>
        <AppLink href="/login">Login</AppLink>
      </div>
    </header>
  );
};

export default Navbar;
