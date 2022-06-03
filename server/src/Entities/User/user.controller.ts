import { NextFunction, Request, Response, Router } from "express";
import { BaseController } from "../../base.controller";
import { API_Config } from "../../config/API.config";
import { Controller } from "../../Decorators/controller";
import { GET, MIDDLEWARE } from "../../Decorators/httpMethods";

//maybe i can add a controller decorator to the class and define the base route property as well as the router property
@Controller("User")
class UserController {
  constructor() {}

  @GET("users")
  public async getUsers(req: Request, res: Response, next: NextFunction) {
    try {
      res.send("users test 100%");
    } catch (error) {
      next(error);
    }
  }
}
export const userController = new UserController();
