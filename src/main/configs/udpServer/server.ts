import { ServerInstance } from "@/main/configs/types";

import { setupApp } from "./app";

export const startServer: ServerInstance.StartServer = async (
  port: number,
  host: string
) => {
  const app = await setupApp();

  return new Promise((resolve, _) => {
    app.bind(port, host, () => {
      console.log(`Server running at port ${port}`);
      resolve();
    });
  });
};
