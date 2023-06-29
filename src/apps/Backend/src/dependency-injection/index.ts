import { ContainerBuilder, YamlFileLoader } from "node-dependency-injection";

const container = new ContainerBuilder();
const loader = new YamlFileLoader(container);

export async function registerDependencyInjectionServices(): Promise<void> {
  await loader.load(`${__dirname.replace(/\\/g, "/")}/services.yaml`);
}

export default container;
