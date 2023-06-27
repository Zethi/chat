import { Server } from "./server";
import type * as http from "http";

export class Backend {
  server?: Server;

  async start(): Promise<void> {
    const port = process.env.PORT ?? "5000";
    this.server = new Server(port);
    await this.server.listen();
  }

  get httpServer(): http.Server | undefined {
    return this.server?.getHTTPServer();
  }

  async stop(): Promise<void> {
    return await this.server?.stop();
  }
}
