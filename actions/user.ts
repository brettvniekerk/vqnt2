"use server";

import { COOKIE_JWT, COOKIE_OPTIONS } from "@/constants/cookies";
import { ONE_DAY_S } from "@/constants/time";
import { ServerActionError } from "@/types/general";
import { UpdatedUser, User } from "@/types/vqnt2";
import utils from "@/utils";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function getUser(): Promise<User | null | ServerActionError> {
  const jwtCookie = cookies().get(COOKIE_JWT);

  if (!jwtCookie?.value) return null;

  const jwt = jwtCookie.value;

  const userResponse = await utils.fetch.get("/user", jwt, ONE_DAY_S, "user");

  if (!userResponse.ok)
    return {
      error: await utils.error.getErrorMessage(userResponse)
    };

  const user = await userResponse.json();

  return user;
}

export async function editUser(
  _: any,
  formdata: FormData
): Promise<ServerActionError> {
  const jwtCookie = cookies().get(COOKIE_JWT);

  if (!jwtCookie?.value) redirect("/");

  const jwt = jwtCookie.value;

  const data = utils.form.formKeyValues(formdata);

  const body = utils.form.prepareBody(data);

  // ! hash password
  if (body?.password) {
    body.password = await utils.security.hash(
      body.password as string,
      +process.env.BCRYPT_SALT_ROUNDS
    );
  }

  const userResponse = await utils.fetch.patch("/user", body, jwt);

  if (!userResponse.ok) {
    return {
      error: await utils.error.getErrorMessage(userResponse)
    };
  }

  const updatedUser = (await userResponse.json()) as UpdatedUser;

  cookies().set(COOKIE_JWT, updatedUser.jwt, COOKIE_OPTIONS);

  revalidateTag("user");

  redirect("/account");
}

export async function deleteUser(): Promise<ServerActionError> {
  const jwtCookie = cookies().get(COOKIE_JWT);

  if (!jwtCookie?.value) redirect("/");

  const jwt = jwtCookie.value;

  const userResponse = await utils.fetch.del("/user", jwt);

  if (!userResponse.ok) {
    return {
      error: await utils.error.getErrorMessage(userResponse)
    };
  }

  cookies().delete(COOKIE_JWT);

  revalidateTag("user");

  redirect("/");
}
