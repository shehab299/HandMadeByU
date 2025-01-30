const AppError = require("../errors/AppError.js");

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

    let statusCode = err.statusCode || 500;
    let status = err.status;
    let message = err.message || "Something went wrong";

    res.status(statusCode).json({
        status,
        message,
    });
}

module.exports = { notFoundHandler, errorLogger, errorHandler };