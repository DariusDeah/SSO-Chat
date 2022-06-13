import { app } from "./app";
import { API_Config } from "./config/API.config";
import http from "http";
class Server {
  constructor() {
    this.startServer();
  }
  public static instance: Server;
  public static getInstance(): Server {
    if (this.instance === null) {
      return new Server();
    }
    return this.instance;
  }
  private startServer(): void {
    const PORT: number = API_Config.port;
    const URL: string = API_Config.url;
    const startupMessage: string = `Server listening on ${PORT} @ ${URL}`;
    http.createServer(app).listen(PORT, () => {
      console.log(startupMessage);
    });
  }
}
export const server: Server = Server.getInstance();
