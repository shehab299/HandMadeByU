const express = require('express');

// Begin Routes
const authRouter = require('./auth.route');
const shopRouter = require('./shop.route');
const cartRouter = require('./cart.route');
const userRouter = require('./profile.route');
const uploadRouter = require('./upload.route');
const productRouter = require('./product.route')
// End Routes

const apiRouter = express.Router();


apiRouter.use('/auth', authRouter);
apiRouter.use('/shops', shopRouter);
apiRouter.use('/products', productRouter);
apiRouter.use('/cart', cartRouter);
apiRouter.use('/me', userRouter);
apiRouter.use('/upload', uploadRouter);


module.exports = apiRouter;

