import express, { IRouter } from "express";
import { API_Config } from "../config/API.config";
import { State } from "../interfaces/state.interface";

export class AppState implements State {
  private _services: any[] = [];
  get services(): any[] {
    return this._services;
  }
  set services(value: any) {
    this._services.push(value);
  }
  private _controllers: any[] = [];
  get controllers(): any[] {
    return this._controllers;
  }

  private _router: express.IRouter = express.Router();
  get router(): express.IRouter {
    return this._router;
  }
  private _baseRoute: string = API_Config.path;
  get baseRoute(): string {
    return this._baseRoute;
  }

  private _currentMethod: string = "";
  get currentMethod(): string {
    return this._currentMethod;
  }
  set currentMethod(currentMethod: string) {
    const validMethods = ["GET", "POST", "PUT", "PATCH", "DELETE"];
    if (!validMethods.includes(currentMethod)) {
      throw new Error(`Invalid Method Type "${currentMethod}`);
    }
    this._currentMethod = currentMethod;
  }
  private _currentRoute: string = "";
  get currentRoute(): string {
    return this._currentRoute;
  }
  set currentRoute(route: string) {
    this._currentRoute = `${this._baseRoute}/${route}`;
  }
}
export const appState = new AppState();
