import { DecodedJwt } from "@/types/general";
import * as bcrypt from "bcrypt";

export const decodeJwt = <T>(jwt: string): DecodedJwt<T> => {
  const parts = jwt.split(".");

  const header = JSON.parse(atob(parts[0]));
  const payload = JSON.parse(atob(parts[1]));

  const signature = parts[2];

  return {
    header,
    payload,
    signature
  };
};

export const hash = async (str: string, rounds: number): Promise<string> =>
  new Promise((res, rej) => {
    bcrypt.hash(str, rounds, (err, hash) => {
      if (err) return rej(err);

      res(hash);
    });
  });
