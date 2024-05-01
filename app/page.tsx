import Title from "@/components/core/Title";
import { FC } from "react";

const Home: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[100dvh]">
      <Title />
      <p>A Very Quick NextJS Template</p>
    </div>
  );
};

export default Home;
