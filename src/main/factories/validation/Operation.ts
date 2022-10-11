import { ValidationBuilder } from "@/main/builders";

import { ValidationComposite } from "@/validation/validators";

export const makeOperationValidation = (): ValidationComposite =>
  new ValidationComposite([
    ...ValidationBuilder.field("operation").required().operation().build(),
  ]);
