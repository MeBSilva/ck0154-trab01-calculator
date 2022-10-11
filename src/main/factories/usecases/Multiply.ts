import { LocalMultiply } from "@/data/usecases/local";

import { Multiply } from "@/domain/usecases";

export const makeMultiply = (): Multiply => new LocalMultiply();
