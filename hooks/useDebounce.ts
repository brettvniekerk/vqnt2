import { DEBOUNCE_DEFAULT_MS } from "@/constants/general";
import { useEffect, useState } from "react";

export default function <T>(
  value: T,
  ms: number = DEBOUNCE_DEFAULT_MS
): [T, boolean] {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const [isDebouncing, setIsDebouncing] = useState(false);

  useEffect(() => {
    setIsDebouncing(true);

    const timeout = setTimeout(() => {
      setDebouncedValue(value);
      setIsDebouncing(false);
    }, ms);

    return () => {
      clearTimeout(timeout);
    };
  }, [value, ms]);

  return [debouncedValue, isDebouncing];
}
