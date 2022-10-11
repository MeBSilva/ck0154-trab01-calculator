import { Socket } from "dgram";
import { loadSync } from "protobufjs";
import { join } from "path";

import { server } from "@/main/envs";

import { assertError } from "@/presentation/utils";

export default (app: Socket): void => {
  const operation = process.argv.slice(2)[0];

  const proto = loadSync(
    join(__dirname, "..", "..", "./proto/operation.proto")
  );

  const ProtoRequest = proto.lookupType("operation.package.Request");
  const ProtoResponse = proto.lookupType("operation.package.Response");

  const message = ProtoRequest.encode(
    ProtoRequest.create({ operation })
  ).finish();

  app.send(message, 0, message.length, server.port, server.host, () => {
    console.info(`sent operation: ${operation}`);
  });

  app.on("message", (receivedMessage, _) => {
    const response = ProtoResponse.decode(receivedMessage) as unknown as {
      status: number;
      result?: any;
      error?: Error;
    };

    if (assertError(response.result)) {
      console.info(`Result:  ${response.result.message}`);
      app.close();
    } else {
      if (response.result) {
        console.info("Result: ", response.result);
        app.close();

        return;
      }

      console.info(response.error?.message);
      app.close();
    }
  });
};
