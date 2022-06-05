import { NextFunction, Request, Response } from "express";
import { Controller } from "../../Decorators/controller.decorator";
import { GET, POST } from "../../Decorators/httpMethods.decorator";
import { userService } from "./user.service";
import { v4 as uuidv4 } from "uuid";
@Controller("User")
class UserController {
  constructor() {}

  @GET("users")
  public async getUsers(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const users = await userService.findAllUsers();
      res.status(200).send(users);
    } catch (error) {
      next(error);
    }
  }

  @GET("users/:uuid")
  public async getUserById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const user = await userService.findByUUId(req.params.uuid);
      res.status(200).send(user);
    } catch (error) {
      next(error);
    }
  }

  @POST("users")
  public async createUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      req.body.uuid = uuidv4();
      const createdUser = await userService.createUser(req.body);
      res.status(201).send(createdUser);
    } catch (error) {
      next(error);
    }
  }
}
export const userController = new UserController();
