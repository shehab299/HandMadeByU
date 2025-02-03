const express = require('express');

// Begin Routes
const authRouter = require('./auth.route');
const shopRouter = require('./shop.route');
const cartRouter = require('./cart.route');
// End Routes

const apiRouter = express.Router();

apiRouter.use('/auth', authRouter);
apiRouter.use('/shops', shopRouter);
apiRouter.use('/cart', cartRouter);

module.exports = apiRouter;

