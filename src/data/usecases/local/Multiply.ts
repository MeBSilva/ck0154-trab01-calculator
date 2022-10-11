import { Multiply } from "@/domain/usecases";

export class LocalMultiply implements Multiply {
  public async multiply({ a, b }: Multiply.Params): Promise<Multiply.Result> {
    return { result: a * b };
  }
}
