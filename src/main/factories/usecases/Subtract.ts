import { LocalSubtract } from "@/data/usecases/local";

import { Subtract } from "@/domain/usecases";

export const makeSubtract = (): Subtract => new LocalSubtract();
