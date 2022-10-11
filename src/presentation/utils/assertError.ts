export const assertError = (err: unknown): err is Error =>
  Object.prototype.toString.call(err) === "[object Error]" ||
  err instanceof Error;
