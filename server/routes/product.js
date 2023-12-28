const express = require('express');
const router = express.Router();
const dbMan = require('../db');
const {isLoggedIn} = require('../Middlewares/authMiddleWare');


// router.use(isLoggedIn);

router.get(`/`, async (req, res) =>{

    // const category = req.params.cat;
    const category = req.query.cat;
    let query = '';

    if(category == undefined)
    {
        query = 'SELECT * FROM public."Product"'
    }
    else
    {
        query = `SELECT * FROM public."Product",public."product_category" 
                 WHERE  "Product"."PID" = "product_category"."Product_ID" AND "product_category"."Category_ID" = '${category}'`
    }
 
    const result = await dbMan.executeQuery(query);

    if(!result)
    {
        res.status(200).json({found:false,data:null});
        res.end()
    }
    else{
        res.status(200).json({data:result,found:true});
        res.end()    
    }
})

router.get('/:id', async(req,res)=>{

    const productId = req.params.id;

    const query = `SELECT * 
                   FROM public."Product",public."Shop"
                   WHERE "PID" = ${productId} and "Product"."SID" = "Shop"."SID"`

                    
    const result = await dbMan.executeQuery(query);

    if(!result)
    {
        res.status(404).json({found:false,data:null});
        res.end();
    }

    if(result)
    {
        res.status(200).json({data:result[0],found:true});
    }

})

router.get('/:id/review', async (req,res) => {

    const productId = req.params.id;

    const query = `SELECT * FROM Review WHERE ProductID = ${product}`;

    const result = dbMan.executeQuery(query);

    if(!result)
    {
        res.status(404).json({found:false,data:null});
        res.end();
    }

    if(result)
    {
        res.status(200).json({data:result,found:true});
    }

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