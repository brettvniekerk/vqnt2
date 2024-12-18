import SignupForm from "@/components/form/auth/SignupForm";
import { Metadata } from "next";
import React, { FC } from "react";

export const metadata: Metadata = {
  title: "Sign Up"
};

const SignUp: FC = () => {
  return (
    <div className="w-full">
      <SignupForm />
    </div>
  );
};

export default SignUp;
