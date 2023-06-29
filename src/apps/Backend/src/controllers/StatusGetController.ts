import { type Request, type Response } from "express";
import { type Controller } from "./Controller";

export class StatusGetController implements Controller {
  async run(request: Request, response: Response): Promise<void> {
    response.status(200).send();
  }
}
