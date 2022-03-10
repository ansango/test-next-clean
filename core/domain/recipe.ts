import { Category } from "./category";
import { Comment } from "./comment";
import { Ingredient } from "./ingredient";
import { User } from "./user";

export type RecipeName = string;

export type RecipeStep = {
  position: number;
  text: Text;
};

export type Like = {
  _id: UniqueId;
  user: User["_id"];
};

export type Recipe = {
  _id: UniqueId;
  name: RecipeName;
  description: Text;
  ingredients: Ingredient[];
  steps: RecipeStep[];
  image: ImageUrl;
  user: User["_id"];
  categories: Category[];
  likes: Like[];
  comments: Comment[];
  createdAt: DateTimeString;
};
