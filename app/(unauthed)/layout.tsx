import Footer from "@/components/nav/Footer";
import Navbar from "@/components/nav/Navbar";
import { ChildrenProp } from "@/types/general";
import React, { FC } from "react";

const UnauthedLayout: FC<ChildrenProp> = ({ children }) => {
  return (
    <div className="px-4 lg:px-[15%] 3xl:px-[25%]">
      <Navbar />
      <main className="my-[54px] lg:my-[70px]">{children}</main>
      <Footer />
    </div>
  );
};

export default UnauthedLayout;
