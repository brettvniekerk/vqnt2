import { cookies } from "next/headers";
import { ONE_DAY_S } from "./time";

export const COOKIE_JWT = "vqnt2.cookie.jwt";

// ! jesus christ
type CookieOptions = Parameters<ReturnType<typeof cookies>["set"]>["2"];

export const COOKIE_OPTIONS: CookieOptions = {
  secure: process.env.NODE_ENV === "production",
  maxAge: ONE_DAY_S
};
