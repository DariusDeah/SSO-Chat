import { NextFunction, Request, Response } from "express";
import { Controller } from "../../Decorators/controller.decorator";
import { GET } from "../../Decorators/httpMethods.decorator";

@Controller("User")
class UserController {
  constructor() {}

  @GET("users")
  public async getUsers(req: Request, res: Response, next: NextFunction) {
    try {
      res.status(200).send("users test 100%");
    } catch (error) {
      next(error);
    }
  }
}
export const userController = new UserController();
