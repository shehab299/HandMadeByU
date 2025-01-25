import AppError from "../errors/AppError.js";

function notFoundHandler(req, res, next) {
    res.status(404).json({
        message: `Not Found - ${req.originalUrl}`,
        status: "fail",
    });
}

function errorLogger(err,req,res,next) {
    console.error(err);
    next(err);
}

function errorHandler(err,req,res,next) {

    let statusCode = 500;
    let status = "error";
    let message = "Internal Server Error";

    res.status(statusCode).json({
        status,
        message,
    });
}

export { notFoundHandler, errorLogger, errorHandler };