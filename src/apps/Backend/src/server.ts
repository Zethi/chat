import { json, urlencoded } from "body-parser";

import express, { Router } from "express";
// import Router from "express-promise-router";

import helmet from "helmet";
import type * as http from "http";
import { registerRoutes } from "./routes";
// import { registerRoutes } from "./routes";

export class Server {
  private readonly express: express.Express;
  private readonly port: string;
  private httpServer?: http.Server;

  constructor(port: string) {
    this.port = port;
    this.express = express();
    this.express.use(json());
    this.express.use(urlencoded({ extended: true }));
    this.express.use(helmet.xssFilter());
    this.express.use(helmet.noSniff());
    this.express.use(helmet.hidePoweredBy());
    this.express.use(helmet.frameguard({ action: "deny" }));

    const router = Router();
    this.express.use(router);
    registerRoutes(router);
  }

  async listen(): Promise<void> {
    await new Promise<void>(resolve => {
      this.httpServer = this.express.listen(this.port, () => {
        console.log(
          `  Backend chat App is running at http://localhost:${this.port} in ${this.express.get("env") as string} mode`
        );
        console.log("  Press CTRL-C to stop\n");
        resolve();
      });
    });
  }

  getHTTPServer(): http.Server | undefined {
    return this.httpServer;
  }

  async stop(): Promise<void> {
    await new Promise<void>((resolve: () => void, reject: (arg0: Error) => void) => {
      if (this.httpServer != null) {
        this.httpServer.close(error => {
          if (error != null) {
            reject(error);
            return;
          }
          resolve();
        });
      }

      resolve();
    });
  }
}
