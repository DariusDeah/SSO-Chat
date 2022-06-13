import { appState } from "../utils/appState";

export function Controller(controllerName: string) {
  const routeFromControllerName = controllerName.toLowerCase().concat("s");
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    constructor.prototype.router = appState.router;
    // constructor.prototype.baseRoute = routeFromControllerName;
  };
}
