/**
 * @api {post} /auth/signup Register a new user
 * @apiName Signup
 * @apiGroup Auth
 * 
 * @apiBody {String} firstName User's first name
 * @apiBody {String} middleName User's middle name (not required)
 * @apiBody {String} lastName User's last name
 * @apiBody {String} email User's email address
 * @apiBody {String} username User's username
 * @apiBody {String} password User's password
 * @apiBody {Number} age User's age 
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
 * @apiBody {String} email User's email address
 * @apiBody {String} password User's password
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
