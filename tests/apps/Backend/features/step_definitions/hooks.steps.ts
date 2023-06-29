import { AfterAll, BeforeAll } from "@cucumber/cucumber";
import { Backend } from "../../../../../src/apps/Backend/src/Backend";

let application: Backend;

BeforeAll(async () => {
  application = new Backend();
  await application.start();
});

AfterAll(async () => {
  await application.stop();
});

export { application };
