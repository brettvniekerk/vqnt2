import { NONE_INPUT_VALUE } from "@/constants/general";

type BodyValues = string | undefined;

export const formKeyValues = (formdata: FormData) => {
  return Object.fromEntries(formdata.entries());
};

const IGNORE_THESE: Array<string> = [];

// TODO: un-cook this
export const prepareBody = (
  obj: Record<string, FormDataEntryValue>
): Record<string, BodyValues> => {
  const entries = Object.entries(obj);
  const ret: Record<string, BodyValues> = {};

  for (const [key, value] of entries) {
    let valueOf: BodyValues = !!value ? (value.valueOf() as string) : undefined;

    if (IGNORE_THESE.includes(key) || valueOf === NONE_INPUT_VALUE) continue;

    ret[key] = valueOf;
  }

  // ! hack to remove $ACTION_ID from NextJS
  const keys = Object.keys(ret);
  const actionKey = keys.find(k => k.includes("$ACTION_ID_"));

  if (actionKey) {
    delete ret[actionKey];
  }

  return ret;
};
