const express = require('express');

// Begin Routes
const authRouter = require('./auth.route');
const shopRouter = require('./shop.route');
const productRouter = require('./product.route');
// End Routes

const apiRouter = express.Router();

apiRouter.use('/auth', authRouter);
apiRouter.use('/shops', shopRouter);
apiRouter.use('/shops/:shopId/products', productRouter);


module.exports = apiRouter;

