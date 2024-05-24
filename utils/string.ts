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
