import LoginForm from "@/components/form/auth/LoginForm";
import AppLink from "@/components/nav/AppLink";
import { Metadata } from "next";
import React, { FC } from "react";

export const metadata: Metadata = {
  title: "Login"
};

const Login: FC = () => {
  return (
    <div className="w-full">
      <LoginForm />

      <p className="text-center lg:text-base">
        Not a member? <AppLink href="/signup">Sign Up Now</AppLink>
      </p>
    </div>
  );
};

export default Login;
