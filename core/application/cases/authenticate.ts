import {
  AuthenticationService,
  UserStorageService,
} from "@/application/ports/user";
import { UserName } from "@/core/domain/user";
import { useAuth } from "@/core/services/authAdapter";
import { useUserStorage } from "@/core/services/storageAdapter";

export const useAuthenticate = () => {
  const storage: UserStorageService = useUserStorage();
  const auth: AuthenticationService = useAuth();

  const authenticate = async (name: UserName, email: Email): Promise<void> => {
    const user = await auth.auth(name, email);
    storage.updateUser(user);
  };
    
};
