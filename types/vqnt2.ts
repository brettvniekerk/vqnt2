import { UUID } from "crypto";

export type User = {
  id: UUID;
  email: string;
  createdAt: Date;
};

export type UpdatedUser = {
  jwt: string;
} & User;
