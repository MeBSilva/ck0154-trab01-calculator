export type Multiply = {
  multiply: (params: Multiply.Params) => Promise<Multiply.Result>;
};

export namespace Multiply {
  export type Params = { a: number; b: number };
  export type Result = { result: number };
}
