import { makeMultiply } from "@/main/factories/usecases";
import { makeBinaryOperationValidation } from "@/main/factories/validation";

import { MultiplyController } from "@/presentation/controllers";
import { Controller, Response } from "@/presentation/protocols";

export const makeMultiplyController = (): Controller<
  MultiplyController.Request,
  Response<MultiplyController.Result>
> => new MultiplyController(makeBinaryOperationValidation(), makeMultiply());
