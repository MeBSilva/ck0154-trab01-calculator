import { Divide } from "@/domain/usecases";

export class LocalDivide implements Divide {
  public async divide({ a, b }: Divide.Params): Promise<Divide.Result> {
    return { result: a / b };
  }
}
