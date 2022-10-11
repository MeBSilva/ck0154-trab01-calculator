import { ServerError } from "@/presentation/errors";
import { Response } from "@/presentation/protocols";

export const badRequest = (error: Error): Response<Error> => ({
  statusCode: 1,
  body: error,
});

export const serverError = (error: Error): Response => ({
  statusCode: 500,
  body: new ServerError(error.stack),
});

export const ok = <T = any>(data: T): Response<T> => ({
  statusCode: 0,
  body: data,
});

export const noContent = (): Response => ({
  statusCode: 0,
  body: null,
});
