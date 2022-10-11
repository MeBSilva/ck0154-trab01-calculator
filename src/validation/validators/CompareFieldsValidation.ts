import { Validation } from "@/presentation/protocols";
import { InvalidParamError } from "@/presentation/errors";

export class CompareFieldsValidation implements Validation {
  constructor(
    private readonly fieldName: string,
    private readonly fieldNameToBeCompared: string
  ) {}

  validate(input: any): Validation.Result {
    if (input[this.fieldName] !== input[this.fieldNameToBeCompared]) {
      return new InvalidParamError(this.fieldName);
    }
  }
}
