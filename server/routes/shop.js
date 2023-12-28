const express = require('express');
const router = express.Router();
const dbMan = require('../db');

router.get(`/`, async (req, res) =>{

    const query = `SELECT * FROM public."Shop"`

    const result = await dbMan.executeQuery(query);


    if(!result)
    {
        res.json({found:false , data:null});
        res.end()
    }
    else{
        res.json({found:true, data:result[0]});
        res.end()
    }    
})

router.get('/:id', async(req,res)=>{

    const shopId = req.params.id;

    const query = `SELECT * FROM public."Shop" WHERE "Shop"."SID" = ${shopId}`;

    const result = await dbMan.executeQuery(query);

    if(!result)
    {
        res.json({found:false , data:null});
        res.end()
    }
    else{
        res.json({found:true, data:result[0]});
        res.end()
    }
    

})

router.get('/:id/follower', async (req,res) => {

    const shopId = req.params.id;

    const query = `SELECT * 
                   FROM public."Customer",public."Follow_Shop"  
                   WHERE "SID" = ${shopId} and "Customer"."CID" = "Follow_Shop"."CID"`;

    const result = await dbMan.executeQuery(query);
    console.log(result);

    if(!result)
    {
        res.json({found:false , data:null});
        res.end()
    }
    else{
        res.json({found:true, data:result});
        res.end()
    }


})


router.get('/:id/product' , async(req,res) => {
    const shopId = req.params.id;

    const query = `SELECT * FROM public."Product" WHERE "Product"."SID" = ${shopId}`;

    const result = await dbMan.executeQuery(query);

    if(!result)
    {
        res.json({found:false , data:null});
        res.end()
    }
    else{
        res.json({found:true, data:result});
        res.end()
    }
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