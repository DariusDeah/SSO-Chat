import express, { IRouter } from "express";
import { API_Config } from "../config/API.config";

export interface PROXY_STATE {
  router: IRouter;
  baseRoute: string;
  currentMethod: string;
  currentRoute: string;
}
export const PROXY_STATE: PROXY_STATE = {
  router: express.Router(),
  baseRoute: API_Config.path,
  currentMethod: "",
  currentRoute: "",
};
