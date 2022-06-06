import express from "express";
import {
  DELETE,
  GET,
  PATCH,
  POST,
  PUT,
} from "../../Decorators/httpMethods.decorator";
import { HTTPMethodsTest } from "../../interfaces/httpMethodsTest.interface";
import { State } from "../../interfaces/state.interface";
import { AppState, appState } from "../../utils/appState";

export abstract class BaseMethodDecoratorTest implements HTTPMethodsTest {
  mockAppState: State = {
    router: express.Router(),
    baseRoute: "",
    currentMethod: "",
    currentRoute: "",
    controllers: [],
    services: [],
  };
  baseDescribe: string;
  appState: AppState = appState;
  GetDecoratorMethod: Function = GET;
  PostDecoratorMethod: Function = POST;
  PutDecoratorMethod: Function = PUT;
  PatchDecoratorMethod: Function = PATCH;
  DeleteDecoratorMethod: Function = DELETE;
  constructor(baseDescribe: string) {
    this.baseDescribe = baseDescribe;
  }
  protected setCurrentMethodToProxy(): void {}
  protected setCurrentRouteToProxy(): void {}
  protected runtTests() {
    this.setCurrentMethodToProxy();
    this.setCurrentRouteToProxy();
  }
}
