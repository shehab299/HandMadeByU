const express = require('express');

const {login, register} = require('../controllers/auth.controller');
const {loginSchema, signupSchema} = require('../validations/auth.validate');

const validate = require('../middleware/validate');


const authRouter = express.Router();


authRouter.post('/login', validate(loginSchema), login);
authRouter.post('/signup', validate(signupSchema), register);

module.exports = authRouter;