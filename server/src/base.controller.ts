import express, { Router } from "express";
import { API_Config } from "./config/API.config";

export class BaseController {
  protected router: Router;
  protected baseRoute: string;
  // set setBaseRoute(route: string) {
  //   this.baseRoute = `${API_Config.path}/${route}`;
  // }
}
