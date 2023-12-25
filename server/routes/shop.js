const express = require('express');
const router = express.Router();

router.get(`/`, async (req, res) =>{

    //GET ALL SHOPS

})

router.get('/:id', async(req,res)=>{

    const shopId = req.params.id;

    //GET SPECIFIC SHOP

})

router.get('/:id/follower', async (req,res) => {

    const shopId = req.params.id;

    // GET ALL FOLLOWERS OF THE SHOP

})


router.get('/:id/product' , async(req,res) => {
    const shopId = req.params.id;

    // GET ALL PRODUCTS OF THE SHOP

})


router.post('/', async (req,res)=>{

    //ADD SHOP

})


router.put('/:id',async (req, res)=> {
    const productId = req.params.id;

    //UPDATE SHOP

})

router.delete('/:id', (req, res)=>{
    const shopId = req.params.id;

    //DELETE SHOP

})

module.exports =router;