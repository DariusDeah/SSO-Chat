import { IRouter } from "express";

export interface State {
  router: IRouter;
  baseRoute: string;
  currentMethod: string;
  currentRoute: string;
  controllers: any[];
  services: any[];
}
