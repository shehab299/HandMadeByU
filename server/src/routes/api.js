const express = require('express');

// Begin Routes
const authRouter = require('./auth.route');
const shopRouter = require('./shop.route');
// End Routes

const apiRouter = express.Router();

apiRouter.use('/auth', authRouter);
apiRouter.use('/shops', shopRouter);


module.exports = apiRouter;

