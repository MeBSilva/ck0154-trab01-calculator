import { Validation } from "@/presentation/protocols";
import { MissingParamError } from "@/presentation/errors";

export class RequiredFieldValidation implements Validation {
  constructor(private readonly fieldName: string) {}

  validate(input: any): Validation.Result {
    if (input[this.fieldName] === (null || undefined)) {
      return new MissingParamError(this.fieldName);
    }
  }
}
