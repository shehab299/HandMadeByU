/**
 * @api {post} /cart Add item to cart
 * @apiName AddToCart
 * @apiGroup Cart
 * 
 * @apiHeader {String} Authorization User's access token
 * 
 * @apiBody {String} productId ID of the product to add
 * @apiBody {Number} quantity Quantity of the product
 * 
 * @apiSuccess {String} status Success message
 * @apiSuccess {Object} data Response data
 * @apiSuccess {Object} data.item The added cart item
 * 
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 201 Created
 *     {
 *       "status": "success",
 *       "data": {
 *         "item": {
 *           "productId": "456",
 *           "quantity": 2
 *         }
 *       }
 *     }
 * 
 * @apiExample {json} Request Example:
 *     {
 *       "productId": "456",
 *       "quantity": 2
 *     }
 * 
 * @apiError {String} error Error message
 */

/**
 * @api {get} /cart Get user cart
 * @apiName GetCart
 * @apiGroup Cart
 * 
 * @apiHeader {String} Authorization User's access token
 * 
 * @apiSuccess {String} status Success message
 * @apiSuccess {Object} data Response data
 * @apiSuccess {Object} data.cart The user's cart
 * 
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": "success",
 *       "data": {
 *         "cart": {
 *           "id": "1",
 *           "userId": "123",
 *           "items": [
 *             {
 *               "id": "10",
 *               "productId" : "20",
 *               "quantity": 2
 *             },
 *             {
 *               "id": "10",
 *               "productId" : "20",
 *               "quantity": 2
 *             }
 *           ]
 *         }
 *       }
 *     }
 * 
 * @apiExample {json} Request Example:
 *     {}
 * 
 * @apiError {String} error Error message
 */

/**
 * @api {patch} /cart/:itemId Update cart item quantity
 * @apiName UpdateCartItemQuantity
 * @apiGroup Cart
 * 
 * @apiHeader {String} Authorization User's access token
 * 
 * @apiParam {String} itemId ID of the cart item to update
 * 
 * @apiBody {Number} quantity New quantity of the product
 * 
 * @apiSuccess {String} status Success message
 * @apiSuccess {Object} data Response data
 * @apiSuccess {Object} data.cartItem The updated cart item
 * 
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": "success",
 *       "data": {
 *         "cartItem": {
 *           "id": "123",
 *           "quantity": 3
 *         }
 *       }
 *     }
 * 
 * @apiExample {json} Request Example:
 *     {
 *       "quantity": 3
 *     }
 * 
 * @apiError {String} error Error message
 */

/**
 * @api {delete} /cart Clear user cart
 * @apiName ClearCart
 * @apiGroup Cart
 * 
 * @apiHeader {String} Authorization User's access token
 * 
 * @apiSuccess {String} status Success message
 * @apiSuccess {Object} data Response data (null)
 * 
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 204 No Content
 *     {
 *        status: "success"
 *     }
 * 
 * @apiExample {json} Request Example:
 *     {}
 * 
 * @apiError {String} error Error message
 */
