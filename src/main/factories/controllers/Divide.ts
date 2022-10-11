import { makeDivide } from "@/main/factories/usecases";
import { makeBinaryOperationValidation } from "@/main/factories/validation";

import { DivideController } from "@/presentation/controllers";
import { Controller, Response } from "@/presentation/protocols";

export const makeDivideController = (): Controller<
  DivideController.Request,
  Response<DivideController.Result>
> => new DivideController(makeBinaryOperationValidation(), makeDivide());
