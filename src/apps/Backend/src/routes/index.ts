import { type Router } from "express";
import glob from "glob";

export function registerRoutes(router: Router): void {
  try {
    const routes = glob.sync(__dirname.replace(/\\/g, "/") + "/**/*.route.*");
    routes.forEach(route => {
      register(route, router);
    });
  } catch (error: any) {
    console.log(
      `An error an ocurred trying to register all the routes, this error can be caused for the no existence of routes in the "/routes" folder`
    );
  }
}

function register(routePath: string, router: Router): void {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const route = require(routePath);
  route.register(router);
}
