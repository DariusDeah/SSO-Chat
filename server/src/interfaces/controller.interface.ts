import { Router } from "express";

export interface Controller {
  baseRoute: string;
  router: Router;
}
