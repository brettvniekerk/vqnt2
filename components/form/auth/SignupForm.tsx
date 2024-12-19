import React, { FC } from "react";
import BaseForm from "../BaseForm";
import TextInput from "../../inputs/TextInput";
import { signup } from "@/actions/auth";

const SignupForm: FC = () => {
  return (
    <BaseForm action={signup} name="Sign Up" disabled>
      <TextInput
        name="email"
        type="email"
        placeholder="Email *"
        autoComplete="email"
        required
        disabled
      />
      <TextInput
        name="password"
        type="password"
        placeholder="Password *"
        autoComplete="new-password"
        required
        disabled
      />
    </BaseForm>
  );
};

export default SignupForm;
