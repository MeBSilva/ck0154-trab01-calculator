import { Socket } from "dgram";

import { adaptEvent } from "@/main/adapters/udpServer";
import {
  makeSumController,
  makeDivideController,
  makeMultiplyController,
  makeSubtractController,
} from "@/main/factories/controllers";
import { makeOperationDecorator } from "@/main/factories/decorators";

const controllers = [
  { controller: makeSumController(), operationSymbol: "+" },
  { controller: makeDivideController(), operationSymbol: "/" },
  { controller: makeMultiplyController(), operationSymbol: "*" },
  { controller: makeSubtractController(), operationSymbol: "-" },
];

export default (app: Socket): void => {
  app.on("listening", () => {
    console.info(`Listening...`);
  });

  app.on("message", adaptEvent(app, makeOperationDecorator(controllers)));
};
