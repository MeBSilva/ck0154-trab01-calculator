export interface Validation {
  validate: (input: any) => Validation.Result;
}

export namespace Validation {
  export type Result = Error | void;
}
