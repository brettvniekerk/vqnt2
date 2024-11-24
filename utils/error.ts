import { ServerActionError, ServerError } from "@/types/general";

export const getErrorMessage = async (response: Response): Promise<string> => {
  const json = (await response.json()) as ServerError;

  return json.message;
};

export const isServerActionError = <T>(
  obj: T | ServerActionError
): obj is ServerActionError => !!(obj as any)["error"];
