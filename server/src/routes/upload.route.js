const express = require('express');
const authenticate = require('../middleware/auth');
const {
    storeSingle,
    storeMultiple
} = require('../middleware/store');

const {
    uploadSingle,
    uploadMultiple
} = require('../controllers/upload.controller');


const uploadRouter = express.Router();

uploadRouter.use(authenticate);


uploadRouter.post("/product", storeSingle("products"), uploadSingle("products"));
uploadRouter.post("/shop", storeSingle("shops"), uploadSingle("shops"));
uploadRouter.post("/profile", storeSingle("profiles"), uploadSingle("profiles"));



module.exports = uploadRouter;




