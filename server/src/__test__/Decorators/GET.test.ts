import { GET } from "../../Decorators/httpMethods.decorator";
import { BaseMethodTest } from "./baseMethodTest";

class GETDecoratorTest extends BaseMethodTest {
  constructor() {
    super("given the @GET decorator function is called");
    this.runtTests();
  }
  protected setCurrentMethodToProxy(): void {
    describe(this.baseDescribe, () => {
      it("should set the proxy state current http method to GET", () => {
        GET("test");
        expect(this.appState.currentMethod).toMatch("GET");
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
}

new GETDecoratorTest();
