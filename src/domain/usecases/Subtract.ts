export type Subtract = {
  subtract: (params: Subtract.Params) => Promise<Subtract.Result>;
};

export namespace Subtract {
  export type Params = { a: number; b: number };
  export type Result = { result: number };
}
