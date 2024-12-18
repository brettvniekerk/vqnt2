import { Href } from "./general";

export type EnvVariable = "APP_URL" | "API_URL" | "BCRYPT_SALT_ROUNDS";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APP_URL: Href;
      API_URL: Href;
      BCRYPT_SALT_ROUNDS: string;
    }
  }
}
