import React, { FC } from "react";
import BaseForm from "../BaseForm";
import TextInput from "../../inputs/TextInput";
import { login } from "@/actions/auth";

const LoginForm: FC = () => {
  return (
    <BaseForm action={login} name="Login">
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
        autoComplete="current-password"
        required
      />
    </BaseForm>
  );
};

export default LoginForm;
