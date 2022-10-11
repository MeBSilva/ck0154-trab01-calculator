import { Sum } from "@/domain/usecases";

import { badRequest, ok, handleError } from "@/presentation/helpers";
import { Controller, Validation, Response } from "@/presentation/protocols";

export class SumController
  implements Controller<SumController.Request, Response<SumController.Result>>
{
  constructor(
    private readonly validation: Validation,
    private readonly sumService: Sum
  ) {}

  public async handle(
    request: SumController.Request
  ): Promise<Response<SumController.Result>> {
    try {
      const error = this.validation.validate(request);

      if (error) return badRequest(error);

      const result = await this.sumService.sum(request);

      return ok(result);
    } catch (error) {
      return handleError(error);
    }
  }
}

export namespace SumController {
  export type Request = Sum.Params;
  export type Result = Sum.Result | Error;
}
