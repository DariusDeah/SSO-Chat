import express, { Router } from "express";
import { API_Config } from "../config/API.config";
import { appState } from "../utils/appState";
import { GET } from "./httpMethods.decorator";

export function Controller(controllerName: string) {
  const routeFromControllerName = controllerName.toLowerCase().concat("s");
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    constructor.prototype.router = appState.router;
    // constructor.prototype.baseRoute = routeFromControllerName;
  };
}
