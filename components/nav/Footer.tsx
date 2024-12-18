import React, { FC } from "react";
import AppLink from "./AppLink";
import { Href } from "@/types/general";
import { dayjs } from "@/constants/time";
import { SITE_TITLE } from "@/constants/general";

type Column = {
  title: string;
  links: Array<{
    name: string;
    href: Href;
  }>;
};

const COLUMNS: Array<Column> = [];

const Footer: FC = () => {
  return (
    <footer className="mb-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 text-app-white/50 text-base gap-6">
        {[...COLUMNS].map(c => (
          <div key={c.title}>
            <p className="font-bold font-lato">{c.title}</p>

            <nav className="mt-2 lg:mt-6 text-sm flex flex-col gap-y-2">
              {[...c.links].map(l => (
                <AppLink key={l.name} href={l.href}>
                  {l.name}
                </AppLink>
              ))}
            </nav>
          </div>
        ))}
      </div>

      <div className="w-full border-t border-app-white/10 mt-6 pt-6 text-app-white/50 text-xs">
        Copyright &copy; {dayjs().year()} {SITE_TITLE}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
