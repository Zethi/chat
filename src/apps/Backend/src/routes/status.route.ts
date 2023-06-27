import { type Request, type Response, type Router } from "express";
import { StatusGetController } from "../controllers/StatusGetController";

export function register(router: Router): void {
  const statusController = new StatusGetController();
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  router.get("/status", async (request: Request, response: Response) => {
    await statusController.run(request, response);
  });
}
