import { app } from "../../app";
import supertest from "supertest";
class UserControllerTest {
  constructor() {
    this.getUsers();
  }
  protected getUsers() {
    describe("given a get request is made to user controller", () => {
      test("should respond with a status code 200 ", async () => {
        const res = await supertest(app).get("api/v1/users");
        expect(res.statusCode).toBe(200);
      });
      test("should respond with content-type:json set ", async () => {
        const res = await supertest(app).get("api/v1/users");
        expect(res.headers["content-type"]).toMatch("json");
      });
    });
  }
}

new UserControllerTest();
