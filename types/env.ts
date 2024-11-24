export type EnvVariable = "APP_URL" | "API_URL" | "BCRYPT_SALT_ROUNDS";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APP_URL: string;
      API_URL: string;
      BCRYPT_SALT_ROUNDS: string;
    }
  }
}
