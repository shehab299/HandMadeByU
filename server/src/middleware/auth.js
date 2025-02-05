const jwt = require("jsonwebtoken");
const AppError = require("../errors/AppError");
const { User } = require("../models");
const asyncDec = require("../utils/asyncDec");

async function authenticate(req, res, next) {

    if (!req.headers.authorization) {
        return next(new AppError("Unauthorized: No token provided", 401));
    }

    let token = req.headers.authorization.split(" ")[1];

    if (!token) {
        return next(new AppError("Unauthorized: Invalid token format", 401));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findByPk(decoded.userId);

    if (!user) {
        return next(new AppError("Unauthorized: User not found", 401));
    }

    req.user = user;
    next();
}


module.exports = asyncDec(authenticate);
