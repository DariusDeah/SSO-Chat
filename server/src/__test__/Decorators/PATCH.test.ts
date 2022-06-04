import { BaseMethodDecoratorTest } from "./baseMethodTest";

class PatchDecoratorTest extends BaseMethodDecoratorTest {
  constructor() {
    super("given the @PATCH decorator function is called");
    this.runtTests();
  }
  protected setCurrentMethodToProxy(): void {
    describe(this.baseDescribe, () => {
      it("should set the proxy state current http method to Patch", () => {
        this.PatchDecoratorMethod("test/route");
        expect(this.appState.currentMethod).toMatch("PATCH");
      });
    });
  }
  protected setCurrentRouteToProxy(): void {
    describe(this.baseDescribe, () => {
      it("should set the proxy state current route to specified route", () => {
        this.PatchDecoratorMethod("test/route");
        expect(this.appState.currentRoute).toMatch("test/route");
      });
    });
  }
}

new PatchDecoratorTest();
