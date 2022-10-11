import { OperationControllerDecorator } from "@/main/decorators";
import { makeOperationValidation } from "@/main/factories/validation";

import { Controller } from "@/presentation/protocols";

export const makeOperationDecorator = (
  controllers: { controller: Controller; operationSymbol: string }[]
): Controller =>
  new OperationControllerDecorator(makeOperationValidation(), controllers);
