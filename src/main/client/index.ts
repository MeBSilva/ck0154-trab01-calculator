// import dgram from "dgram";

// import { server } from "@/main/envs";

// const args = process.argv.slice(2);

// // const PORT = 7895;
// const HOST = args[1];
// const message = args[0];

// const client = dgram.createSocket("udp4");

// client.send(message, 0, message.length, server.port, HOST, () => {
//   console.info(`Msg enviada: ${message}`);
// });

// client.on("message", (receivedMessage, _) => {
//   console.info(`Msg recebida:  ${receivedMessage}`);
//   client.close();
// });

import "dotenv/config";
import { join } from "path";

import { client } from "@/main/envs";
import { ServerInstance } from "@/main/configs/types";

const serverConfigPath = join(__dirname, "..", "./configs");

const serverInstancePath = join(serverConfigPath, client.type);

(async () => {
  const serverInstance = (await import(serverInstancePath)) as ServerInstance;

  await serverInstance.startServer(client.port, client.host);
})();
