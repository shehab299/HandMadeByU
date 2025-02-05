/**
 * @api {post} /upload/product Upload a Product Image
 * @apiName UploadProduct
 * @apiGroup Upload
 * 
 * @apiHeader {String} Authorization Bearer <token> Authentication token.
 * @apiHeader {String} Content-Type multipart/form-data Content type for file upload.
 * 
 * @apiBody {File} file The image file for the product.
 * 
 * @apiSuccess {String} status Status of the operation.
 * @apiSuccess {String} fileUrl The URL where the uploaded product image is accessible.
 * 
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": "success",
 *       "fileUrl": "http://localhost:3000/images/products/<filename>"
 *     }
 * 
 * @apiError NoFileUploaded The uploaded file is missing or not provided.
 * 
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "status": "error",
 *       "message": "No file uploaded"
 *     }
 */

/**
 * @api {post} /upload/shop Upload a Shop Image
 * @apiName UploadShop
 * @apiGroup Upload
 * 
 * @apiHeader {String} Authorization Bearer <token> Authentication token.
 * @apiHeader {String} Content-Type multipart/form-data Content type for file upload.
 * 
 * @apiBody {File} file The image file for the shop.
 * 
 * @apiSuccess {String} status Status of the operation.
 * @apiSuccess {String} fileUrl The URL where the uploaded shop image is accessible.
 * 
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": "success",
 *       "fileUrl": "http://localhost:3000/images/shops/<filename>"
 *     }
 * 
 * @apiError NoFileUploaded The uploaded file is missing or not provided.
 * 
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "status": "error",
 *       "message": "No file uploaded"
 *     }
 */

/**
 * @api {post} /upload/profile Upload a Profile Image
 * @apiName UploadProfile
 * @apiGroup Upload
 * 
 * @apiHeader {String} Authorization Bearer <token> Authentication token.
 * @apiHeader {String} Content-Type multipart/form-data Content type for file upload.
 * 
 * @apiBody {File} file The image file for the user's profile.
 * 
 * @apiSuccess {String} status Status of the operation.
 * @apiSuccess {String} fileUrl The URL where the uploaded profile image is accessible.
 * 
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": "success",
 *       "fileUrl": "http://localhost:3000/images/profiles/<filename>"
 *     }
 * 
 * @apiError NoFileUploaded The uploaded file is missing or not provided.
 * 
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "status": "error",
 *       "message": "No file uploaded"
 *     }
 */
