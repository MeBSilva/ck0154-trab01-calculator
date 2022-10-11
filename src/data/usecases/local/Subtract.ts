import { Subtract } from "@/domain/usecases";

export class LocalSubtract implements Subtract {
  public async subtract({ a, b }: Subtract.Params): Promise<Subtract.Result> {
    return { result: a - b };
  }
}
