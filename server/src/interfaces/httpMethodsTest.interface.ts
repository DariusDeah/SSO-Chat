import { AppState } from "../utils/appState";

export interface HTTPMethodsTest {
  baseDescribe: string;
  appState: AppState;
  GetDecoratorMethod: Function;
  PostDecoratorMethod: Function;
  PutDecoratorMethod: Function;
  PatchDecoratorMethod: Function;
  DeleteDecoratorMethod: Function;
}
