import { BaseMethodDecoratorTest } from "../baseMethodTest";

class PutDecoratorTest extends BaseMethodDecoratorTest {
  constructor() {
    super("given the @PUT decorator function is called");
    this.runtTests();
  }
  protected setCurrentMethodToProxy(): void {
    describe(this.baseDescribe, () => {
      it("should set the app state current method to PUT", () => {
        this.PutDecoratorMethod("test/rout");
        expect(this.appState.currentMethod).toMatch("PUT");
      });
    });
  }
  protected setCurrentRouteToProxy(): void {
    describe(this.baseDescribe, () => {
      it("should set the app state current route to specified route", () => {
        this.PutDecoratorMethod("test/route");
        expect(this.appState.currentRoute).toMatch("test/route");
      });
    });
  }
}
new PutDecoratorTest();
