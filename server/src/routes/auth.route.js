const express = require('express');

const {login, signup} = require('../controllers/auth.controller');
const {loginSchema, signupSchema} = require('../validations/auth.validate');

const validate = require('../middleware/validate');

const authRouter = express.Router();

authRouter.post('/signup', validate(signupSchema), signup);
authRouter.post('/login', validate(loginSchema), login);

module.exports = authRouter;