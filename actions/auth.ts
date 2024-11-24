"use server";

import { COOKIE_JWT, COOKIE_OPTIONS } from "@/constants/cookies";
import utils from "@/utils";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { ServerActionError } from "@/types/general";
import { revalidateTag } from "next/cache";

export async function login(
  _: any,
  formdata: FormData
): Promise<ServerActionError> {
  const { email, password } = utils.form.formKeyValues(formdata);

  const jwtResponse = await utils.fetch.post("/auth/login", {
    email,
    password
  });

  if (!jwtResponse.ok) {
    return {
      error: await utils.error.getErrorMessage(jwtResponse)
    };
  }

  const jwt = await jwtResponse.text();

  cookies().set(COOKIE_JWT, jwt, COOKIE_OPTIONS);

  redirect("/");
}

export async function signup(
  _: any,
  formdata: FormData
): Promise<ServerActionError> {
  const { email, password } = utils.form.formKeyValues(formdata);

  const jwtResponse = await utils.fetch.post("/auth/signup", {
    email,
    password
  });

  if (!jwtResponse.ok) {
    return {
      error: await utils.error.getErrorMessage(jwtResponse)
    };
  }

  const jwt = await jwtResponse.text();

  cookies().set(COOKIE_JWT, jwt, COOKIE_OPTIONS);

  redirect("/");
}

export async function logout() {
  const jwtCookie = cookies().get(COOKIE_JWT);

  if (jwtCookie?.value) {
    const jwt = jwtCookie.value;
    await utils.fetch.post("/auth/logout", undefined, jwt);
  }

  cookies().delete(COOKIE_JWT);

  revalidateTag("user");

  redirect("/");
}
