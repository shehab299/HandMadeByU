const express = require('express');
const profileController = require('../controllers/profile.controller');
const authenticate = require('../middleware/auth');
const validate = require('../middleware/validate');

const profileRouter = express.Router();

profileRouter.use(authenticate);

profileRouter.get('/', profileController.getProfile);

module.exports = profileRouter;