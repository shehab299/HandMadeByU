const express = require('express');
const cartController = require('../controllers/cart.controller');
const cartValidation = require('../validations/cart.validate');
const validate = require('../middleware/validate')
const authenticate = require('../middleware/auth')

const router = express.Router();

router.use(authenticate);

router.post('/', validate(cartValidation.createCartItemSchema), cartController.addToCart);
router.get('/', cartController.getCart);
router.patch('/item/:itemId', validate(cartValidation.updateCartItemSchema), cartController.updateCartItem);
router.delete('/', cartController.clearCart);

module.exports = router;