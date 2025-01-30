const express = require('express');

// Begin Routes
const authRouter = require('./auth.route');
// End Routes

const apiRouter = express.Router();

apiRouter.use('/auth', authRouter);

module.exports = apiRouter;

