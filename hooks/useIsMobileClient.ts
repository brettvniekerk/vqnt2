export default function (): boolean {
  if (typeof window === "undefined") return false;

  return window.matchMedia("(max-width: 1000px)").matches;
}
