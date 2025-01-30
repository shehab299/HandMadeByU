const express = require('express');
const { 
    createShop, 
    getShops, 
    getShop, 
    updateShop, 
    deleteShop 
} = require('../controllers/shop.controller');

const { createShopSchema, updateShopSchema } = require('../validations/shop.validate');
const validate = require('../middleware/validate');
const authenticate = require('../middleware/auth');

const shopRouter = express.Router();

/**
 * @api {post} /shops Create a new shop
 * @apiName CreateShop
 * @apiGroup Shop
 * @apiPermission Authenticated Users
 *
 * @apiHeader {String} Authorization User's JWT token.
 * 
 * @apiBody {String} name Name of the shop (required).
 * @apiBody {String} description Description of the shop (optional).
 * @apiExample {json} Request-Example:
 *     {
 *       "name": "My Handmade Shop",
 *       "description": "A shop selling handmade crafts."
 *     }
 *
 * @apiSuccess {String} status Success message.
 * @apiSuccess {Object} data Created shop object.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 201 Created
 *     {
 *       "status": "success",
 *       "data": {
 *         "id": 1,
 *         "name": "My Handmade Shop",
 *         "description": "A shop selling handmade crafts.",
 *         "userId": 123,
 *         "banner": "https://example.com/banner.jpg",
 *         "logo": "https://example.com/logo.jpg"
 *       }
 *     }
 * 
 * @apiError (400) ValidationError Missing or invalid fields.
 * @apiError (401) Unauthorized User is not authenticated.
 */
shopRouter.post('/', validate(createShopSchema), authenticate, createShop);


/**
 * @api {get} /shops Get all shops
 * @apiName GetShops
 * @apiGroup Shop
 * 
 * @apiParam {Number} [userId] Filter shops by the user's ID.
 * 
 * @apiSuccess {String} status Status of the response.
 * @apiSuccess {Object[]} data List of shops.
 * @apiSuccess {Number} data.id Shop's unique ID.
 * @apiSuccess {String} data.name Name of the shop.
 * @apiSuccess {String} data.description Description of the shop.
 * @apiSuccess {Number} data.userId The user ID of the shop's owner.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": "success",
 *       "data": [
 *         {
 *           "id": 1,
 *           "name": "My Handmade Shop",
 *           "description": "A shop selling handmade crafts.",
 *           "userId": 123,
 *           "banner": "https://example.com/banner.jpg",
 *           "logo": "https://example.com/logo.jpg"
 *         },
 *         {
 *           "id": 2,
 *           "name": "The Artisanal Corner",
 *           "description": "Unique handmade art pieces.",
 *           "userId": 124,
 *           "banner": "https://example.com/banner2.jpg",
 *           "logo": "https://example.com/logo2.jpg"
 *         }
 *       ]
 *     }
 * 
 * @apiError (401) {String} error Unauthorized if the user is not authenticated.
 * 
 * @apiHeader {String} Authorization Bearer token of the authenticated user.
 */
shopRouter.get('/', authenticate, getShops);


/**
 * @api {get} /shops/:id Get a single shop by ID
 * @apiName GetShop
 * @apiGroup Shop
 * @apiPermission Authenticated Users
 *
 * @apiHeader {String} Authorization User's JWT token.
 *
 * @apiParam {Number} id Shop's unique ID.
 *
 * @apiSuccess {String} status Success message.
 * @apiSuccess {Object} data Shop object.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": "success",
 *       "data": {
 *         "id": 1,
 *         "name": "My Handmade Shop",
 *         "description": "A shop selling handmade crafts.",
 *         "userId": 123,
 *         "banner": "https://example.com/banner.jpg",
 *         "logo": "https://example.com/logo.jpg"
 *       }
 *     }
 * 
 * @apiError (400) NotFound Shop not found.
 * @apiError (401) Unauthorized User is not authenticated.
 */
shopRouter.get('/:id', authenticate, getShop);


/**
 * @api {put} /shops/:id Update a shop
 * @apiName UpdateShop
 * @apiGroup Shop
 * @apiPermission Authenticated Users
 *
 * @apiHeader {String} Authorization User's JWT token.
 * 
 * @apiParam {Number} id Shop's unique ID.
 *
 * @apiBody {String} [name] Updated name of the shop.
 * @apiBody {String} [description] Updated description.
 * @apiBody {String} [imageUrl] Updated image URL.
 * @apiExample {json} Request-Example:
 *     {
 *       "name": "Updated Handmade Shop",
 *       "description": "A newly updated description for the shop."
 *     }
 *
 * @apiSuccess {String} status Success message.
 * @apiSuccess {Object} data Updated shop object.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": "success",
 *       "data": {
 *         "id": 1,
 *         "name": "Updated Handmade Shop",
 *         "description": "A newly updated description for the shop.",
 *         "userId": 123,
 *         "banner": "https://example.com/updated-banner.jpg",
 *         "logo": "https://example.com/updated-logo.jpg"
 *       }
 *     }
 * 
 * @apiError (400) ValidationError Invalid or missing fields.
 * @apiError (401) Unauthorized User is not authenticated.
 * @apiError (404) NotFound Shop not found.
 */
shopRouter.put('/:id', validate(updateShopSchema), authenticate, updateShop);


/**
 * @api {delete} /shops/:id Delete a shop
 * @apiName DeleteShop
 * @apiGroup Shop
 * @apiPermission Authenticated Users
 *
 * @apiHeader {String} Authorization User's JWT token.
 *
 * @apiParam {Number} id Shop's unique ID.
 *
 * @apiSuccess {String} status Success message.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 204 No Content
 *     {
 *       "status": "success",
 *       "data": null
 *     }
 * 
 * @apiError (401) Unauthorized User is not authenticated.
 * @apiError (404) NotFound Shop not found.
 */
shopRouter.delete('/:id', authenticate, deleteShop);

module.exports = shopRouter;
