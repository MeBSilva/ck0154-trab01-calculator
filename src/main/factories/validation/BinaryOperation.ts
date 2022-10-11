import { ValidationBuilder } from "@/main/builders";

import { ValidationComposite } from "@/validation/validators";

export const makeBinaryOperationValidation = (): ValidationComposite =>
  new ValidationComposite([
    ...ValidationBuilder.field("a").required().type("number").build(),
    ...ValidationBuilder.field("b").required().type("number").build(),
  ]);
