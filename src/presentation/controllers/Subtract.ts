import { Subtract } from "@/domain/usecases";

import { badRequest, ok, handleError } from "@/presentation/helpers";
import { Controller, Validation, Response } from "@/presentation/protocols";

export class SubtractController
  implements
    Controller<SubtractController.Request, Response<SubtractController.Result>>
{
  constructor(
    private readonly validation: Validation,
    private readonly subtractService: Subtract
  ) {}

  public async handle(
    request: SubtractController.Request
  ): Promise<Response<SubtractController.Result>> {
    try {
      const error = this.validation.validate(request);

      if (error) return badRequest(error);

      const result = await this.subtractService.subtract(request);

      return ok(result);
    } catch (error) {
      return handleError(error);
    }
  }
}

export namespace SubtractController {
  export type Request = Subtract.Params;
  export type Result = Subtract.Result | Error;
}
