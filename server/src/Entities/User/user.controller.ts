import { NextFunction, Request, Response } from "express";
import { Controller } from "../../Decorators/controller.decorator";
import { GET } from "../../Decorators/httpMethods.decorator";
import { userService } from "./user.service";

@Controller("User")
class UserController {
  constructor() {}

  @GET("users")
  public async getUsers(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (error) {
      next(error);
    }
  }
}
export const userController = new UserController();
