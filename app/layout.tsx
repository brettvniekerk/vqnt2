import { FC, ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import classNames from "classnames";
import fonts from "@/constants/fonts";

export const metadata: Metadata = {
  title: "VQNT2",
  description: "A Very Quick NextJS Template",
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

const RootLayout: FC<{
  children: ReactNode;
}> = ({ children }) => (
  <html lang="en">
    <body className={classNames(fonts, "font-sans text-sm")}>
      <main>{children}</main>
    </body>
  </html>
);

export default RootLayout;
