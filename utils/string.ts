import { Href } from "@/types/general";

export const formatRoute = (route: Href) => {
  const words = route.slice(1).split("-");

  return words
    .map(word => {
      const [leadingChar, ...rest] = word;

      return `${leadingChar.toUpperCase()}${rest.join("")}`;
    })
    .join(" ");
};

export const replaceWhitespace = (str: string) => str.replaceAll(" ", "-");

export const unreplaceWhitespace = (str: string) => str.replaceAll("-", " ");
