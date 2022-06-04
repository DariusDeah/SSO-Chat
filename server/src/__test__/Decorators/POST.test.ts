import { POST } from "../../Decorators/httpMethods.decorator";
import { BaseMethodDecoratorTest } from "./baseMethodTest";

class PostDecoratorTest extends BaseMethodDecoratorTest {
  constructor() {
    super("given the @POST decorator function is called");
    this.runtTests();
  }
  protected setCurrentMethodToProxy(): void {
    describe(this.baseDescribe, () => {
      it("should set the state current http method to POST", () => {
        this.PostDecoratorMethod("test/route");
        expect(this.appState.currentMethod).toMatch("POST");
      });
    });
  }
  protected setCurrentRouteToProxy(): void {
    describe(this.baseDescribe, () => {
      it("should set the state current route to specified route", () => {
        this.PostDecoratorMethod("test/route");
        expect(this.appState.currentRoute).toMatch("test");
      });
    });
  }
}
new PostDecoratorTest();
