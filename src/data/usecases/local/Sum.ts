import { Sum } from "@/domain/usecases";

export class LocalSum implements Sum {
  public async sum({ a, b }: Sum.Params): Promise<Sum.Result> {
    return { result: a + b };
  }
}
