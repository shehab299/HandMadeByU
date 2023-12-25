const express = require('express');
const router = express.Router();
const {isLoggedIn} = require('../Middlewares/authMiddleWare');


router.use(isLoggedIn);

router.get(`/`, async (req, res) =>{

    //GET ALL PRODUCTS

})

router.get('/:id', async(req,res)=>{

    const productId = req.params.id;

    //GET SPECIFIC PRODUCT AND SHOP INFO ASSOCIATED WITH PRODUCT

})

router.get('/:id/review', async (req,res) => {

    const productId = req.params.id;

    //GET THE REVIEWS OF THE PRODUCT AND ASSOCIATED INFO

})


router.post('/', async (req,res)=>{
    //ADD PRODUCT
})


router.put('/:id', async (req, res)=> {
    const productId = req.params.id;

    //UPDATE PRODUCT

})

router.delete('/:id',(req, res)=>{
    const productId = req.params.id;

    //DELETE PRODUCT

})



module.exports =router;