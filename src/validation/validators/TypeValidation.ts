import { Validation } from "@/presentation/protocols";
import { InvalidParamError } from "@/presentation/errors";

export class TypeValidation implements Validation {
  constructor(
    private readonly fieldName: string,
    private readonly type: "string" | "object" | "number"
  ) {}

  public validate(input: any): Validation.Result {
    if (!(typeof input[this.fieldName] === this.type)) {
      return new InvalidParamError(this.fieldName);
    }
  }
}
