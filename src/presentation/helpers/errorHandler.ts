import {
  InvalidParamError,
  MissingParamError,
  ServerError,
} from "@/presentation/errors";
import { badRequest, serverError } from "@/presentation/helpers/errorHelper";
import { assertError } from "@/presentation/utils";
import { Response } from "@/presentation/protocols";

export const handleError = (err: unknown): Response<Error> => {
  if (assertError(err)) {
    switch (err.name) {
      case InvalidParamError.name:
        return badRequest(err);
      case MissingParamError.name:
        return badRequest(err);
      case ServerError.name:
        return serverError(err);
      default:
        console.error(err);
        return serverError(err);
    }
  }

  return serverError(new Error("Internal server error"));
};
