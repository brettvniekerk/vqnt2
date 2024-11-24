import { ChangeEvent, useCallback, useState } from "react";

export default function useChangeTextInput(
  defaultValue: string
): [state: string, callback: (e: ChangeEvent<HTMLInputElement>) => void] {
  const [state, dispatch] = useState(defaultValue);
  const callback = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => dispatch(e.currentTarget.value),
    [dispatch]
  );

  return [state, callback];
}
