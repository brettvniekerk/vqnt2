import { cookies } from "next/headers";
import { ONE_DAY_S } from "./time";
import { SITE_TITLE } from "./general";

export const COOKIE_JWT = `${SITE_TITLE.toLowerCase()}.cookie.jwt`;

// ! jesus christ
type CookieOptions = Parameters<ReturnType<typeof cookies>["set"]>["2"];

export const COOKIE_OPTIONS: CookieOptions = {
  secure: process.env.NODE_ENV === "production",
  maxAge: ONE_DAY_S
};
