import { HTTPMethodsTest } from "../../interfaces/httpMethodsTest.interface";
import { PROXY_STATE } from "../../utils/miniProxy";

export class BaseMethodTest implements HTTPMethodsTest {
  baseDescribe: string;
  proxy: PROXY_STATE = PROXY_STATE;
  constructor(baseDescribe: string) {
    this.baseDescribe = baseDescribe;
  }
  protected setCurrentMethodToProxy(): void {}
  protected setCurrentRouteToProxy(): void {}
}
