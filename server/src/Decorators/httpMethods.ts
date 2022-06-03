import express, { NextFunction, Request, Response } from "express";
import { app } from "../app";
import { Controller } from "../interfaces/controller.interface";
import { PROXY_STATE } from "../utils/miniProxy";

export function GET(route: string) {
  PROXY_STATE["currentMethod"] = "GET";
  PROXY_STATE["currentRoute"] = PROXY_STATE["baseRoute"] + route;
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    PROXY_STATE["router"]
      .route(PROXY_STATE["baseRoute"] + route)
      .get(descriptor.value);
  };
}
export function POST(route: string) {
  PROXY_STATE["currentMethod"] = "POST";
  PROXY_STATE["currentRoute"] = PROXY_STATE["baseRoute"] + route;

  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    PROXY_STATE["router"]
      .route(PROXY_STATE["baseRoute"] + route)
      .post(descriptor.value);
  };
}
function PUT(route: string) {
  PROXY_STATE["currentMethod"] = "PUT";
  PROXY_STATE["currentRoute"] = PROXY_STATE["baseRoute"] + route;

  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {};
}
function PATCH(route: string) {
  PROXY_STATE["currentMethod"] = "PATCH";
  PROXY_STATE["currentRoute"] = PROXY_STATE["baseRoute"] + route;

  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {};
}
function DELETE(route: string) {
  PROXY_STATE["currentMethod"] = "DELETE";
  PROXY_STATE["currentRoute"] = PROXY_STATE["baseRoute"] + route;

  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {};
}
export function MIDDLEWARE(func: Function) {
  console.log("inner middle");
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    switch (PROXY_STATE["currentMethod"]) {
      case "GET":
        {
          PROXY_STATE["router"].get(PROXY_STATE["currentRoute"], func());
        }
        break;
      case "POST":
        {
          PROXY_STATE["router"].post(PROXY_STATE["currentRoute"], func());
        }
        break;

      default:
        break;
    }
  };
}
