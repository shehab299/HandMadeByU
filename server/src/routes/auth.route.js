const express = require('express');

const {login, register} = require('../controllers/auth.controller');
const {loginSchema, signupSchema} = require('../validations/auth.validate');

const validate = require('../middleware/validate');


const authRouter = express.Router();


/**
 * @api {post} /auth/signup Register a new user
 * @apiName Signup
 * @apiGroup Auth
 * 
 * @apiParam {String} firstName User's first name
 * @apiParam {String} middleName User's middle name
 * @apiParam {String} lastName User's last name
 * @apiParam {String} email User's email address
 * @apiParam {String} username User's username
 * @apiParam {String} password User's password
 * @apiParam {Number} age User's age
 * 
 * @apiSuccess {Object} user User object containing user data
 * @apiSuccess {String} status Response status
 * 
 * @apiError {String} message Error message (Email or Username already exists)
 * @apiError {Number} status Status code
 * 
 * @apiExample {json} Example request:
 *    {
 *      "firstName": "John",
 *      "middleName": "M",
 *      "lastName": "Doe",
 *      "email": "user@example.com",
 *      "username": "john_doe",
 *      "password": "password123",
 *      "age": 25
 *    }
 * 
 * @apiExample {json} Example response:
 *    {
 *      "status": "success",
 *      "data": {
 *          "user": {
 *              "firstName": "John",
 *              "middleName": "M",
 *              "lastName": "Doe",
 *              "email": "user@example.com",
 *              "username": "john_doe",
 *              "age": 25
 *          }
 *      }
 *    }
 */

authRouter.post('/signup', validate(signupSchema), register);

/**
 * @api {post} /auth/login Login to the application
 * @apiName Login
 * @apiGroup Auth
 * 
 * @apiParam {String} email User's email address
 * @apiParam {String} password User's password
 * 
 * @apiSuccess {String} token JWT token for the user
 * @apiSuccess {String} status Response status
 * 
 * @apiError {String} message Error message (Invalid email or password)
 * @apiError {Number} status Status code
 * 
 * @apiExample {json} Example request:
 *    {
 *      "email": "user@example.com",
 *      "password": "password123"
 *    }
 * 
 * @apiExample {json} Example response:
 *    {
 *      "status": "success",
 *      "data": {
 *          "token": "JWT_TOKEN"
 *      }
 *    }
 */

authRouter.post('/login', validate(loginSchema), login);

module.exports = authRouter;