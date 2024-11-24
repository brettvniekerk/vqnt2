import React, { FC } from "react";
import BaseForm from "../BaseForm";
import TextInput from "../../inputs/TextInput";
import { signup } from "@/actions/auth";

const SignupForm: FC = () => {
  return (
    <BaseForm action={signup} name="Signup">
      <TextInput
        name="email"
        type="email"
        placeholder="Email *"
        autoComplete="email"
        required
      />
      <TextInput
        name="password"
        type="password"
        placeholder="Password *"
        autoComplete="new-password"
        required
      />
    </BaseForm>
  );
};

export default SignupForm;
