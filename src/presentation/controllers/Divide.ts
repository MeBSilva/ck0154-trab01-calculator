import { Divide } from "@/domain/usecases";

import { badRequest, ok, handleError } from "@/presentation/helpers";
import { Controller, Validation, Response } from "@/presentation/protocols";

export class DivideController
  implements
    Controller<DivideController.Request, Response<DivideController.Result>>
{
  constructor(
    private readonly validation: Validation,
    private readonly divideService: Divide
  ) {}

  public async handle(
    request: DivideController.Request
  ): Promise<Response<DivideController.Result>> {
    try {
      const error = this.validation.validate(request);

      if (error) return badRequest(error);

      const result = await this.divideService.divide(request);

      return ok(result);
    } catch (error) {
      return handleError(error);
    }
  }
}

export namespace DivideController {
  export type Request = Divide.Params;
  export type Result = Divide.Result | Error;
}
