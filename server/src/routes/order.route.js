const express = require('express');
const orderController = require('../controllers/order.controller');
const validate = require('../middleware/validate');
const authenticate = require('../middleware/auth');
const orderValidator = require('../validations/order.validate');

const orderRouter = express.Router();

orderRouter.use(authenticate);

orderRouter.post('/', validate(orderValidator.createOrderSchema), orderController.createOrder);
orderRouter.get('/', orderController.getOrders);
orderRouter.get('/:orderId', orderController.getOrder);

module.exports = orderRouter;