export type Divide = {
  divide: (params: Divide.Params) => Promise<Divide.Result>;
};

export namespace Divide {
  export type Params = { a: number; b: number };
  export type Result = { result: number };
}
