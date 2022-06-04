import { BaseMethodDecoratorTest } from "./baseMethodTest";

class DeleteDecoratorTest extends BaseMethodDecoratorTest {
  constructor() {
    super("given the @DELETE decorator function is called");
    this.runtTests();
  }
  protected setCurrentMethodToProxy(): void {
    describe(this.baseDescribe, () => {
      it("should set the proxy state current http method to Delete", () => {
        this.DeleteDecoratorMethod("test/route");
        expect(this.appState.currentMethod).toMatch("DELETE");
      });
    });
  }
  protected setCurrentRouteToProxy(): void {
    describe(this.baseDescribe, () => {
      it("should set the proxy state current route to specified route", () => {
        this.DeleteDecoratorMethod("test/route");
        expect(this.appState.currentRoute).toMatch("test/route");
      });
    });
  }
}

new DeleteDecoratorTest();
