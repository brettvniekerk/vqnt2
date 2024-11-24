import { ReactNode } from "react";

export type Href = `/${string}`;

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
