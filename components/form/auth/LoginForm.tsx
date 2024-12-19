import React, { FC } from "react";
import BaseForm from "../BaseForm";
import TextInput from "../../inputs/TextInput";
import { login } from "@/actions/auth";

const LoginForm: FC = () => {
  return (
    <BaseForm action={login} name="Login" disabled>
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
        autoComplete="current-password"
        required
        disabled
      />
    </BaseForm>
  );
};

export default LoginForm;
