const express = require('express');

const authController = require('../controllers/auth.controller');
const authValidate = require('../validations/auth.validate');

const validate = require('../middleware/validate');

const authRouter = express.Router();

authRouter.post('/signup', validate(authValidate.signupSchema), authController.signup);
authRouter.post('/login', validate(authValidate.loginSchema), authController.login);

module.exports = authRouter;
