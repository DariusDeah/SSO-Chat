import { BaseMethodDecoratorTest } from "./baseMethodTest";

class GetDecoratorTest extends BaseMethodDecoratorTest {
  constructor() {
    super("given the @GET decorator function is called");
    this.runtTests();
  }
  protected setCurrentMethodToProxy(): void {
    describe(this.baseDescribe, () => {
      it("should set the proxy state current http method to GET", () => {
        this.GetDecoratorMethod("test");
        expect(this.appState.currentMethod).toMatch("GET");
      });
    });
  }
  protected setCurrentRouteToProxy(): void {
    describe(this.baseDescribe, () => {
      it("should set the proxy state current route to specified route", () => {
        this.GetDecoratorMethod("test/route");
        expect(this.appState.currentRoute).toMatch("test/route");
      });
    });
  }
}

new GetDecoratorTest();
