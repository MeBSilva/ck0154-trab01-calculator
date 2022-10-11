import { Response } from "./Response";

export interface Controller<T = any, U extends Response = Response> {
  readonly handle: (request: T) => Promise<U>;
}
