import classNames from "classnames";
import { Inter, Lato } from "next/font/google";
// import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"]
});

export default classNames(inter.variable, lato.variable);
