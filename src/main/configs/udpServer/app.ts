import { Socket, createSocket } from "dgram";

import { setupEvents } from "./events";

export const setupApp = async (): Promise<Socket> => {
  const app = createSocket("udp4");

  setupEvents(app);

  return app;
};
