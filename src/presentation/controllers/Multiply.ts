import { Multiply } from "@/domain/usecases";

import { badRequest, ok, handleError } from "@/presentation/helpers";
import { Controller, Validation, Response } from "@/presentation/protocols";

export class MultiplyController
  implements
    Controller<MultiplyController.Request, Response<MultiplyController.Result>>
{
  constructor(
    private readonly validation: Validation,
    private readonly multiplyService: Multiply
  ) {}

  public async handle(
    request: MultiplyController.Request
  ): Promise<Response<MultiplyController.Result>> {
    try {
      const error = this.validation.validate(request);

      if (error) return badRequest(error);

      const result = await this.multiplyService.multiply(request);

      return ok(result);
    } catch (error) {
      return handleError(error);
    }
  }
}

export namespace MultiplyController {
  export type Request = Multiply.Params;
  export type Result = Multiply.Result | Error;
}
