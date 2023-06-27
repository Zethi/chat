import { type Request, type Response } from "express";

export interface Controller {
  run: (request: Request, response: Response) => Promise<void>;
}
