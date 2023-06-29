import { type Request, type Response, type Router } from "express";
import container from "../dependency-injection";

export function register(router: Router): void {
  const getStatusController = container.get("apps.Backend.controllers.StatusGetController");
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  router.get("/status", async (request: Request, response: Response) => {
    await getStatusController.run(request, response);
  });
}
