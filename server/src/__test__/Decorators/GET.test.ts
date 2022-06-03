import { GET } from "../../Decorators/httpMethods.decorator";
import { BaseMethodTest } from "./baseMethodTest";

class GETDecoratorTest extends BaseMethodTest {
  constructor() {
    super("when the @GET decorator function is called");
    this.runTests();
  }
  protected setCurrentMethodToProxy(): void {
    describe(this.baseDescribe, () => {
      it("should set the proxy state current http method to GET", () => {
        GET("GET");
        expect(this.appState.currentMethod).toEqual("GET");
      });
    });
  }
  protected setCurrentRouteToProxy(): void {
    describe(this.baseDescribe, () => {
      it("should set the proxy state current route to specified route", () => {
        GET("test/route");
        expect(this.appState.currentRoute).toMatch("test/route");
      });
    });
  }
  private runTests() {
    this.setCurrentMethodToProxy();
    this.setCurrentRouteToProxy();
  }
}

new GETDecoratorTest();
