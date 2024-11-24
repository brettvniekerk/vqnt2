"use client";

import Button from "@/components/interactable/Button";
import { FC, useCallback, useEffect } from "react";

type Props = {
  error: Error & { digest?: string };
};

const ErrorPage: FC<Props> = ({ error }) => {
  useEffect(() => {
    console.error(error.message);
  }, [error]);

  const callback = useCallback(() => (window.location.href = "/"), []);

  return (
    <div>
      <p className="font-bold">Oops, something went wrong!</p>
      <p className="mt-4 italic">{error.message}</p>

      <div className="mt-4">
        <Button onClick={callback}>Go back</Button>
      </div>
    </div>
  );
};

export default ErrorPage;
