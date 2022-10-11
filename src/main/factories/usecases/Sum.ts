import { LocalSum } from "@/data/usecases/local";

import { Sum } from "@/domain/usecases";

export const makeSum = (): Sum => new LocalSum();
