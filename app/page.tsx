import { SITE_TITLE, SITE_TITLE_LONG } from "@/constants/general";
import { FC } from "react";

const Home: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[100dvh]">
      <p>{SITE_TITLE}</p>
      <p>{SITE_TITLE_LONG}</p>
    </div>
  );
};

export default Home;
