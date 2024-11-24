"use client";

import { ChildrenProp, ServerActionError } from "@/types/general";
import React, {
  FC,
  FormHTMLAttributes,
  useActionState,
  useEffect
} from "react";
import Button from "../interactable/Button";

const BASE_ERROR_STATE: ServerActionError = {
  error: undefined
};

type PickedFormProps = Pick<FormHTMLAttributes<HTMLFormElement>, "onSubmit">;

type Props = {
  name?: string;
  action?: (_: any, formdata: FormData) => Promise<any>;
} & PickedFormProps &
  ChildrenProp;

const BaseForm: FC<Props> = ({
  children,
  name = undefined,
  action = undefined,
  onSubmit = undefined
}) => {
  const formStateCallback: any = onSubmit || action || (() => {});

  const [state, dispatch] = useActionState(formStateCallback, BASE_ERROR_STATE);

  useEffect(() => {
    if (!state?.error) return;

    throw new Error(state.error);
  }, [state]);

  return (
    <form
      action={dispatch}
      onSubmit={dispatch}
      className="flex gap-y-4 flex-col w-full"
    >
      {!!name && <p className="font-bold text-xl">{name}</p>}

      {children}

      <div className="mt-4">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};

export default BaseForm;
