import { app } from "./app";
import { API_Config } from "./config/API.config";
import { DataSource } from "typeorm";

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
    app.listen(PORT, () => {
      console.log(startupMessage);
    });
    console.log("Server listening?");
  }
  private startDB() {}
}
export const server: Server = new Server();
