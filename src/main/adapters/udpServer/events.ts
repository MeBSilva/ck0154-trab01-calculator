import { RemoteInfo, Socket } from "dgram";
import { loadSync } from "protobufjs";
import { join } from "path";

import { assertError } from "@/presentation/utils";
import { Controller, Response } from "@/presentation/protocols";

type ResponseMessage = { status: number; result?: any; error?: Error };

export const adaptEvent =
  (app: Socket, controller: Controller<any, Response>) =>
  async (requestMessage: Buffer, remoteInfo: RemoteInfo) => {
    console.log(`Calculating...`);

    const proto = loadSync(
      join(__dirname, "..", "..", "..", "./proto/operation.proto")
    );

    const ProtoRequest = proto.lookupType("operation.package.Request");
    const ProtoResponse = proto.lookupType("operation.package.Response");

    const request = ProtoRequest.decode(requestMessage);

    const response = await controller.handle(request);

    let responseMessage: ResponseMessage = {
      status: response.statusCode,
      result: response.body.result,
    };

    if (assertError(response.body)) {
      responseMessage = {
        error: response.body,
        status: response.statusCode,
      };
    }

    const stringifiedResponse = ProtoResponse.encode(responseMessage).finish();

    app.send(
      stringifiedResponse,
      0,
      stringifiedResponse.length,
      remoteInfo.port,
      remoteInfo.address
    );

    console.log("Listening...");
  };
