import { User, UserName } from "@/core/domain/user";

export interface AuthenticationService {
  login(name: UserName, email: Email): Promise<User>;
  register(name: UserName, email: Email): Promise<User>;
  logout(): Promise<void>;
}
