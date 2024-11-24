"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useCallback } from "react";

export function useModifySearchParams() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const create = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      if (params.has(name)) params.delete(name);

      params.set(name, value);

      return router.push(`${pathname}?${params.toString()}`);
    },
    [searchParams, router, pathname]
  );

  const remove = useCallback(
    (name: string) => {
      const params = new URLSearchParams(searchParams.toString());

      if (!params.has(name)) return;

      params.delete(name);

      return router.push(`${pathname}?${params.toString()}`);
    },
    [searchParams, router, pathname]
  );

  return {
    create,
    remove
  };
}
