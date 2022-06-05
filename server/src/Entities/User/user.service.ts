import { DBRepository } from "../../db.repository";
import { IUser } from "./user.model";

class UserService {
  async findByUUId(uuid: string) {
    const foundUser = await DBRepository.User.selectByUUID(uuid);
    return foundUser;
  }
  constructor() {}
  async createUser(user: IUser): Promise<any> {
    const createdUser = await DBRepository.User.create(user);
    return createdUser;
  }
  async findAllUsers(): Promise<IUser[]> {
    const foundUsers = await DBRepository.User.selectAll();
    if (!foundUsers) throw new Error(`No users found`);
    return foundUsers;
  }
}
export const userService: UserService = new UserService();
