import "dotenv/config";
import { join } from "path";

import { server } from "@/main/envs";
import { ServerInstance } from "@/main/configs/types";

const serverConfigPath = join(__dirname, "./configs");

const serverInstancePath = join(serverConfigPath, server.type);

(async () => {
  const serverInstance = (await import(serverInstancePath)) as ServerInstance;

  await serverInstance.startServer(server.port, server.host);
})();
