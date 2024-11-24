import { logout } from "@/actions/auth";
import Button from "@/components/interactable/Button";
import React, { FC } from "react";

const LogoutForm: FC = () => {
  return (
    <form action={logout}>
      <Button type="submit">Logout</Button>
    </form>
  );
};

export default LogoutForm;
