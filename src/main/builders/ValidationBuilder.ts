import { Validation } from "@/presentation/protocols";

import {
  RequiredFieldValidation,
  CompareFieldsValidation,
  OperationValidation,
  TypeValidation,
} from "@/validation/validators";

export class ValidationBuilder {
  private constructor(
    private readonly fieldName: string,
    private readonly validations: Validation[]
  ) {}

  public static field(fieldName: string): ValidationBuilder {
    return new ValidationBuilder(fieldName, []);
  }

  public required(): ValidationBuilder {
    this.validations.push(new RequiredFieldValidation(this.fieldName));
    return this;
  }

  public operation(): ValidationBuilder {
    this.validations.push(new OperationValidation(this.fieldName));
    return this;
  }

  public type(type: "string" | "number" | "object"): ValidationBuilder {
    this.validations.push(new TypeValidation(this.fieldName, type));
    return this;
  }

  public sameAs(fieldToCompare: string): ValidationBuilder {
    this.validations.push(
      new CompareFieldsValidation(this.fieldName, fieldToCompare)
    );
    return this;
  }

  public build(): Validation[] {
    return this.validations;
  }
}
