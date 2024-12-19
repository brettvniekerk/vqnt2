"use client";

import { ChildrenProp, ServerActionError } from "@/types/general";
import React, {
  FC,
  FormHTMLAttributes,
  useActionState,
  useEffect
} from "react";
import Button from "../interactable/Button";
import AppSection from "../containers/AppSection";
import PageTitle from "../text/PageTitle";

const BASE_ERROR_STATE: ServerActionError = {
  error: undefined
};

type PickedFormProps = Pick<FormHTMLAttributes<HTMLFormElement>, "onSubmit">;

type Props = {
  name?: string;
  disabled?: boolean;
  action?: (_: any, formdata: FormData) => Promise<any>;
} & PickedFormProps &
  ChildrenProp;

const BaseForm: FC<Props> = ({
  children,
  name = undefined,
  disabled = false,
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
    <form action={dispatch} onSubmit={dispatch}>
      {!!name && (
        <AppSection className="text-center">
          <PageTitle>{name}</PageTitle>
        </AppSection>
      )}

      <AppSection className="flex flex-col items-center lg:items-start gap-y-4">
        {children}

        <Button type="submit" disabled={disabled}>
          Submit
        </Button>
      </AppSection>
    </form>
  );
};

export default BaseForm;
