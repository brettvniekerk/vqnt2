import { EnvVariable } from "@/types/env";

function getEnvVariable(name: EnvVariable) {
  const variable = process.env[name];
  if (!variable) throw new Error(`Missing environment variable ${name}`);
  return variable;
}

export const APP_URL = getEnvVariable("APP_URL");
