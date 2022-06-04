import { DBRepository } from "../../db.repository";
import { IUser } from "./user.model";

class UserService {
  constructor() {}
  async createUser(user: IUser): Promise<void> {
    const createdUser = await DBRepository.User.create(user);
    // return createdUser;
  }
  async findAllUsers(): Promise<IUser[]> {
    const foundUsers = await DBRepository.User.selectAll();
    if (!foundUsers) throw new Error(`No users found`);
    return foundUsers;
  }
}
export const userService: UserService = new UserService();
