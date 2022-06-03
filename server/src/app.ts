import express from "express";
import { userController } from "./Entities/User/user.controller";
import { appState } from "./utils/appState";
class App {
  app: express.Application = express();
  public static instance: App;
  public static getInstance(): App {
    if (this.instance == null) {
      return new App();
    }
    return this.instance;
  }
  constructor() {
    this.useMiddleware();
    this.useRoutes();
  }
  private useMiddleware(): void {
    this.app.use(express.json({ limit: "10mb" }));
  }
  private useRoutes(): void {
    this.app.use("/health", (req, res, next) => {
      res.send("<h1>all good</h1>");
    });
    const controllers = [userController];
    this.app.use("/", appState.router);
  }
}
export const app: App["app"] = App.getInstance().app;
