import { Blender } from "./blender";
import { Category } from "./category";
import { Chat } from "./chat";
import { Comment } from "./comment";
import { Ingredient } from "./ingredient";
import { Recipe } from "./recipe";

export type UserName = string;

export type User = {
  _id: UniqueId;
  name: UserName;
  email: Email;
  recipes: Recipe[];
  comments: Comment[];
  chats: Chat[];
  blenders: Blender[];
  preferences: Category[];
  allergies: Ingredient[];
  createdAt: DateTimeString;
};

export function hasAllergy(user: User, ingredient: Ingredient): boolean {
  return user.allergies.includes(ingredient);
}

export function hasPreference(user: User, category: Category): boolean {
  return user.preferences.includes(category);
}
