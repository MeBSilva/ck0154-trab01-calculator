import { Validation } from "@/presentation/protocols";
import { MissingParamError } from "@/presentation/errors";

export class OperationValidation implements Validation {
  constructor(private readonly fieldName: string) {}

  public validate(input: any): Validation.Result {
    const regex = /^\d+[+/*-]\d+$/;

    if (!regex.test(input[this.fieldName])) {
      return new MissingParamError(this.fieldName);
    }
  }
}
