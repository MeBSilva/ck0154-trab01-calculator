import { LocalDivide } from "@/data/usecases/local";

import { Divide } from "@/domain/usecases";

export const makeDivide = (): Divide => new LocalDivide();
