import { User } from "./user";

export type Comment = {
  _id: UniqueId;
  text: Text;
  createdAt: Date;
  user: User["_id"];
};
