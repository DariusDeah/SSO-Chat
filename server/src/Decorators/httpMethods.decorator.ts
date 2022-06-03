import { appState } from "../utils/appState";

//every factory function outer method will set the current method and route to state
//every inner function will append a route and method to state router
export function GET(route: string) {
  appState.currentMethod = "GET";
  appState.currentRoute = route;
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    appState.router.route(appState.currentRoute).get(descriptor.value);
  };
}
export function POST(route: string) {
  appState.currentMethod = "POST";
  appState.currentRoute = route;

  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    appState.router.route(appState.currentRoute).post(descriptor.value);
  };
}
export function PUT(route: string) {
  appState.currentMethod = "PUT";
  appState.currentRoute = route;

  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    appState.router.route(appState.currentRoute).put(descriptor.value);
  };
}
export function PATCH(route: string) {
  appState.currentMethod = "PATCH";
  appState.currentRoute = route;

  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    appState.router.route(appState.currentRoute).patch(descriptor.value);
  };
}
export function DELETE(route: string) {
  appState.currentMethod = "DELETE";
  appState.currentRoute = route;
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    appState.router.route(appState.currentRoute).delete(descriptor.value);
  };
}
