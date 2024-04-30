import classNames from "classnames";
import { Inter } from "next/font/google";
// import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default classNames(inter.variable);
