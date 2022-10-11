export type Sum = {
  sum: (params: Sum.Params) => Promise<Sum.Result>;
};

export namespace Sum {
  export type Params = { a: number; b: number };
  export type Result = { result: number };
}
