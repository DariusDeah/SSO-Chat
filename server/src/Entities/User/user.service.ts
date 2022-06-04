import { DBRepository } from "../../db.repository";
import { IUser } from "./user.model";

class UserService {
  constructor() {}
  async createUser(user: IUser): Promise<IUser> {
    const createdUser = DBRepository.User.create(user);
    return createdUser;
  }
}
export const userService: UserService = new UserService();
