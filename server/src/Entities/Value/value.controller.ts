import { NextFunction, Request, Response } from "express";
import { Controller } from "../../Decorators/controller";
import { GET, MIDDLEWARE, POST } from "../../Decorators/httpMethods";

@Controller("Value")
class ValueController {
  constructor() {}

  @GET("values")
  public async getValues(req: Request, res: Response, next: NextFunction) {
    try {
      res.send("values working⭐");
    } catch (error) {
      next(error);
    }
  }

  @POST("values")
  public async createValue(req: Request, res: Response, next: NextFunction) {
    try {
      res.send(req.body);
    } catch (error) {
      next(error);
    }
  }
}
export const valueController = new ValueController();
