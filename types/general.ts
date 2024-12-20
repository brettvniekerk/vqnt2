import { ReactNode } from "react";

export type Protocol = "http" | "https";

export type Href = `/${string}` | `${Protocol}://${string}`;

export type ChildrenProp = {
  children: ReactNode | Array<ReactNode>;
};

export type ServerError = {
  message: string;
  digest?: string;
  error: string;
  statusCode: number;
};

export type ServerActionError = {
  error?: string;
};

export type DecodedJwt<T> = {
  header: Record<string, unknown>;
  payload: T;
  signature: string;
};
