import { InvalidParamError } from "@/presentation/errors";
import { badRequest, handleError } from "@/presentation/helpers";
import { Controller, Response, Validation } from "@/presentation/protocols";

export class OperationControllerDecorator implements Controller {
  constructor(
    private readonly validation: Validation,
    private readonly controllers: {
      controller: Controller;
      operationSymbol: string;
    }[]
  ) {}

  public async handle(request: { operation: string }): Promise<Response> {
    try {
      const error = this.validation.validate(request);

      if (error) return badRequest(error);

      const { operation } = request;

      const regex = /[+/*-]/;

      const operationIndex = operation.search(regex);

      if (operationIndex === -1)
        return badRequest(new InvalidParamError("operation"));

      const operationSymbol = operation[operationIndex];

      const [a, b] = operation.split(regex);

      const operationController = this.controllers.find(
        (item) => item.operationSymbol === operationSymbol
      );

      if (!operationController)
        return badRequest(new InvalidParamError("operation"));

      const response = await operationController.controller.handle({
        a: parseInt(a, 10),
        b: parseInt(b, 10),
      });

      return response;
    } catch (err) {
      return handleError(err);
    }
  }
}
