import { app } from "./app";
import { API_Config } from "./config/API.config";
import mysql2 from "mysql2";
import http from "http";
class Server {
  public static instance: Server;
  public static getInstance(): Server {
    if (this.instance === null) {
      return new Server();
    }
    return this.instance;
  }
  constructor() {
    this.startServer();
  }
  private startServer(): void {
    const PORT: number = API_Config.port;
    const URL: string = API_Config.url;
    const startupMessage: string = `Server listening on ${PORT} @ ${URL}`;
    http.createServer(app).listen(PORT, () => {
      console.log(startupMessage);
    });
  }
  private startDB() {}
}
export const server: Server = new Server();
