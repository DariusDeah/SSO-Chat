import { GET } from "../../Decorators/httpMethods";
import { PROXY_STATE } from "../../utils/miniProxy";
import { HTTPMethodsTest } from "../../interfaces/httpMethodsTest.interface";
import { BaseMethodTest } from "./base-test";

class GETDecoratorTest extends BaseMethodTest {
  constructor() {
    super("when the @GET decorator function is called");
    this.runTests();
  }
  protected setCurrentMethodToProxy(): void {
    describe(this.baseDescribe, () => {
      it("should set the proxy state current http method to GET", () => {
        GET("test");
        expect(this.proxy["currentMethod"]).toStrictEqual("GET");
      });
    });
  }
  protected setCurrentRouteToProxy(): void {
    describe(this.baseDescribe, () => {
      it("should set the proxy state current route to specified route", () => {
        GET("test/route");
        expect(this.proxy["currentRoute"]).toMatch("test/route");
      });
    });
  }
  private runTests() {
    this.setCurrentMethodToProxy();
    this.setCurrentRouteToProxy();
  }
}

new GETDecoratorTest();
