import { makeSum } from "@/main/factories/usecases";
import { makeBinaryOperationValidation } from "@/main/factories/validation";

import { SumController } from "@/presentation/controllers";
import { Controller, Response } from "@/presentation/protocols";

export const makeSumController = (): Controller<
  SumController.Request,
  Response<SumController.Result>
> => new SumController(makeBinaryOperationValidation(), makeSum());
