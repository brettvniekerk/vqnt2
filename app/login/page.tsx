import LoginForm from "@/components/form/auth/LoginForm";
import { Metadata } from "next";
import Link from "next/link";
import React, { FC } from "react";

export const metadata: Metadata = {
  title: "Login"
};

const Login: FC = () => {
  return (
    <div className="w-full">
      <LoginForm />

      <div className="mt-8">
        Not a member? <Link href="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;
