import { type Request, type Response, type Router } from "express";
import { StatusGetController } from "../controllers/StatusGetController";

export function register(router: Router): void {
  const statusController = new StatusGetController();
  router.get("/status", (request: Request, response: Response) => statusController);
}
