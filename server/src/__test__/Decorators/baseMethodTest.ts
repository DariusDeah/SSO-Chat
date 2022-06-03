import { HTTPMethodsTest } from "../../interfaces/httpMethodsTest.interface";
import { AppState, appState } from "../../utils/appState";

export class BaseMethodTest implements HTTPMethodsTest {
  baseDescribe: string;
  appState: AppState = appState;
  constructor(baseDescribe: string) {
    this.baseDescribe = baseDescribe;
  }
  protected setCurrentMethodToProxy(): void {}
  protected setCurrentRouteToProxy(): void {}
}
