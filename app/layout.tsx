import { FC } from "react";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import classNames from "classnames";
import fonts from "@/constants/fonts";
import { SITE_TITLE, SITE_TITLE_LONG } from "@/constants/general";
import { ChildrenProp } from "@/types/general";
// import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_TITLE}`
  },
  description: SITE_TITLE_LONG,
  appleWebApp: {
    capable: true
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
};

const RootLayout: FC<ChildrenProp> = ({ children }) => (
  <html lang="en">
    <body
      className={classNames(
        fonts,
        "font-sans text-sm bg-vqnt2-black text-vqnt2-white"
      )}
    >
      <main>{children}</main>
    </body>
    {/* <GoogleAnalytics /> */}
  </html>
);

export default RootLayout;
