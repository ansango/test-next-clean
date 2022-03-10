import { Message } from "./message";
import { User } from "./user";

export type Chat = {
  _id: UniqueId;
  messages: Message[];
  user: User["_id"];
  createdAt: Date;
};
