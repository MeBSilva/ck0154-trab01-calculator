export type Response<T = any> = {
  statusCode: number;
  body: T;
};
