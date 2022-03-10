import { User } from "./user";

export type Message = {
  _id: UniqueId;
  text: Text;
  createdAt: Date;
  user: User["_id"];
};
