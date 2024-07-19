import { ValidationError } from "joi";
import CustomErrorHandler from "../services/custom-error-handler";
import { NODE_ENV } from "../config/credentials";

const errorHandler = (err, req, res, next) => {
  let statusCode = 500;
  let data = {
    message: "Internal Server Error",
    ...(NODE_ENV === "development" && { error: err.message }),
  };

  if (err instanceof ValidationError) {
    statusCode = 400;
    data = {
      message: "Validation Error",
      error: err.details[0].message,
    };
  }

  if (err instanceof CustomErrorHandler) {
    statusCode = err.statusCode;
    data = {
      error: err.message,
    };
  }

  return res.status(statusCode).json(data);
};

export default errorHandler;
