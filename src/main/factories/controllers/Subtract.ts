import { makeSubtract } from "@/main/factories/usecases";
import { makeBinaryOperationValidation } from "@/main/factories/validation";

import { SubtractController } from "@/presentation/controllers";
import { Controller, Response } from "@/presentation/protocols";

export const makeSubtractController = (): Controller<
  SubtractController.Request,
  Response<SubtractController.Result>
> => new SubtractController(makeBinaryOperationValidation(), makeSubtract());
