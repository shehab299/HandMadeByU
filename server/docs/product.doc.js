/**
 * @api {post} /shops/:shopId/products Create a new product
 * @apiName CreateProduct
 * @apiGroup Products
 * @apiPermission authenticated
 *
 * @apiHeader {String} Authorization User's access token.
 * 
 * @apiParam {String} shopId Shop's unique ID.
 * @apiBody {String} name Product name (min: 2, max: 100 characters).
 * @apiBody {Number} price Product price (min: 0).
 * @apiBody {String} description Product description.
 * @apiBody {Number} quantity Product quantity (min: 0).
 * @apiBody {String} [image] Product image URL.
 *
 * @apiSuccess {String} status Request status.
 * @apiSuccess {Object} data Product data.
 * 
 * @apiSuccessExample {json} Success Response:
 *   HTTP/1.1 201 Created
 *   {
 *     "status": "success",
 *     "data": {
 *       "product": {
 *         "id": "12345",
 *         "name": "Handmade Vase",
 *         "price": 20,
 *         "description": "A beautiful handmade vase.",
 *         "quantity": 10,
 *         "image": "http://example.com/image.jpg"
 *       }
 *     }
 *   }
 *
 * @apiExample {json} Request Example:
 *   POST /shops/67890/products
 *   {
 *     "name": "Handmade Vase",
 *     "price": 20,
 *     "description": "A beautiful handmade vase.",
 *     "quantity": 10,
 *     "image": "http://example.com/image.jpg"
 *   }
 */

/**
 * @api {get} /shops/:shopId/products Get all products in a shop
 * @apiName GetProducts
 * @apiGroup Products
 * @apiPermission authenticated
 *
 * @apiHeader {String} Authorization User's access token.
 * 
 * @apiParam {String} shopId Shop's unique ID.
 *
 * @apiSuccess {String} status Request status.
 * @apiSuccess {Object[]} data Array of products.
 * 
 * @apiSuccessExample {json} Success Response:
 *   HTTP/1.1 200 OK
 *   {
 *     "status": "success",
 *     "data": {
 *       "products": [
 *         {
 *           "id": "12345",
 *           "name": "Handmade Vase",
 *           "price": 20,
 *           "description": "A beautiful handmade vase.",
 *           "quantity": 10,
 *           "image": "http://example.com/image.jpg"
 *         }
 *       ]
 *     }
 *   }
 *
 */

/**
 * @api {get} /shops/:shopId/products/:productId Get a single product
 * @apiName GetProduct
 * @apiGroup Products
 * @apiPermission authenticated
 *
 * @apiHeader {String} Authorization User's access token.
 * 
 * @apiParam {String} shopId Shop's unique ID.
 * @apiParam {String} productId Product's unique ID.
 *
 * @apiSuccess {String} status Request status.
 * @apiSuccess {Object} data Product data.
 * 
 * @apiSuccessExample {json} Success Response:
 *   HTTP/1.1 200 OK
 *   {
 *     "status": "success",
 *     "data": {
 *       "product": {
 *         "id": "12345",
 *         "name": "Handmade Vase",
 *         "price": 20,
 *         "description": "A beautiful handmade vase.",
 *         "quantity": 10,
 *         "image": "http://example.com/image.jpg"
 *       }
 *     }
 *   }
 *
 */

/**
 * @api {put} /shops/:shopId/products/:productId Update a product
 * @apiName UpdateProduct
 * @apiGroup Products
 * @apiPermission authenticated
 *
 * @apiHeader {String} Authorization User's access token.
 * 
 * @apiParam {String} shopId Shop's unique ID.
 * @apiParam {String} productId Product's unique ID.
 * 
 * @apiBody {String} [name] Updated product name (min: 2, max: 100 characters).
 * @apiBody {Number} [price] Updated product price (min: 0).
 * @apiBody {String} [description] Updated product description.
 * @apiBody {Number} [quantity] Updated product quantity (min: 0).
 * @apiBody {String} [image] Updated product image URL.
 *
 * @apiSuccess {String} status Request status.
 * @apiSuccess {Object} data Updated product data.
 * 
 * @apiSuccessExample {json} Success Response:
 *   HTTP/1.1 200 OK
 *   {
 *     "status": "success",
 *     "data": {
 *       "product": {
 *         "id": "12345",
 *         "name": "Updated Handmade Vase",
 *         "price": 25,
 *         "description": "An updated beautiful handmade vase.",
 *         "quantity": 8,
 *         "image": "http://example.com/new_image.jpg"
 *       }
 *     }
 *   }
 *
 * @apiExample {json} Request Example:
 *   PUT /shops/67890/products/12345
 *   {
 *     "name": "Updated Handmade Vase",
 *     "price": 25,
 *     "description": "An updated beautiful handmade vase.",
 *     "quantity": 8,
 *     "image": "http://example.com/new_image.jpg"
 *   }
 */

/**
 * @api {delete} /shops/:shopId/products/:productId Delete a product
 * @apiName DeleteProduct
 * @apiGroup Products
 * @apiPermission authenticated
 *
 * @apiHeader {String} Authorization User's access token.
 * 
 * @apiParam {String} shopId Shop's unique ID.
 * @apiParam {String} productId Product's unique ID.
 *
 * @apiSuccess {String} status Request status.
 * @apiSuccess {Null} data No content.
 * 
 * @apiSuccessExample {json} Success Response:
 *   HTTP/1.1 204 No Content
 *   {
 *     "status": "success",
 *     "data": null
 *   }
 *
 */
