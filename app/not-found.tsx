import { FC } from "react";
import { redirect } from "next/navigation";

const NotFound: FC = () => redirect("/");

export default NotFound;
