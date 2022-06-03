import express, { Router } from "express";
import { API_Config } from "../config/API.config";
import { PROXY_STATE } from "../utils/miniProxy";
import { GET } from "./httpMethods";

export function Controller(controllerName: string) {
  const routeFromControllerName = controllerName.toLowerCase().concat("s");
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    constructor.prototype.router = PROXY_STATE["router"];
    constructor.prototype.baseRoute =
      PROXY_STATE["baseRoute"] + routeFromControllerName;
    console.log("class dec", constructor.prototype);
  };
}
