import { appState } from "../utils/appState";

export function MIDDLEWARE(func: Function) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    switch (appState.currentMethod) {
      case "GET":
        {
          appState.router.get(appState.currentRoute, func());
        }
        break;
      case "POST":
        {
          appState.router.post(appState.currentRoute, func());
        }
        break;
      case "PUT":
        {
          appState.router.put(appState.currentRoute, func());
        }
        break;
      case "PATCH":
        {
          appState.router.patch(appState.currentRoute, func());
        }
        break;
      case "DELETE":
        {
          appState.router.delete(appState.currentRoute, func());
        }
        break;
      default:
        break;
    }
  };
}
