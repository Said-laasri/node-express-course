const { CustomAPIError } = require("../errors");
const { StatusCodes } = require("http-status-codes");
const errorHandlerMiddleware = (err, req, res, next) => {
  let customEroor = {
    //set default
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "Something went wrong, please try again later",
  };

  // if (err instanceof CustomAPIError) {
  //   return res.status(err.statusCode).json({ msg: err.message });
  // }
  if (err.name === "ValidationError") {
    // console.log(Object.values(err.errors));
    customEroor.msg = Object.values(err.errors)
      .map((item) => item.message)
      .join(", "); //join array to string;
    customEroor.statusCode = 400;
  }

  if (err.code && err.code === 11000) {
    customEroor.msg = `Duplicate value entered for ${Object.keys(
      err.keyValue
    )} field, please choose another value`;
    customEroor.statusCode = 400;
  }

  if (err.name === "CastError") {
    customEroor.msg = `No item found with id : ${err.value}`;
    customEroor.statusCode = 404;
  }
  // return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err });
  return res.status(customEroor.statusCode).json({ msg: customEroor.msg });
};

module.exports = errorHandlerMiddleware;
