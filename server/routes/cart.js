const express = require('express');
const router = express.Router();
const dbMan = require('../db');
const validator = require('validator');

router.get('/:id/cartItem' , async (req,res) => {

    const cartId = req.params.id;

    const query =  `SELECT * FROM public."product_in_cart",public."Product" WHERE "product_in_cart"."Product_ID" = "Product"."PID" and "Cart_ID" = ${cartId}`;
    console.log(query);
    const result = await dbMan.executeQuery(query);

    if(!result)
    {
        res.json({data : null,found:false});
        res.end();
    }
    else{
        res.json({data : result, found:true});
        res.end()
    }
})


function validateAmount(amount)
{
    if(!amount)
        return false;
    else if(amount < 0)
        return false;
    else if(!isNaN(amount) == false)
        return false;
    else 
        return true;
}

router.post('/:id/cartItem' , async (req,res) => {
    
        const cartId = req.params.id;

        const {productId,amount} = req.body;
    
        if(validateAmount(amount) == false)
        {
            res.status(400).json({success:false});
            res.end();
            return;
        }
        
        const query = `INSERT INTO public."product_in_cart"("Cart_ID", "Product_ID", "Quantity") VALUES (${cartId},${productId},${amount})`;
    
        const result = await dbMan.executeNonQuery(query);
    
        if(!result)
        {
            res.json({success:false});
            res.end();
        }
        else{
            res.json({success:true});
            res.end();
        }
        return;
})

router.put('/:id/cartItem/:Itemid' , async (req,res) => {

    const cartId = req.params.id;
    const Itemid = req.params.Itemid;

    const {amount} = req.body;

    if(validateAmount(amount) == false)
    {
        res.status(400).json({found:false});
        res.end();
    }

    const query = `UPDATE public."product_in_cart" SET "Amount" = ${amount} WHERE "Cart_ID" = ${cartId} and "Product_ID" = ${Itemid}`;

    const result = await dbMan.executeNonQuery(query);

    if(!result)
    {
        res.json({data : null,found:false});
        res.end();
    }
    else{
        res.json({data : result, found:true});
        res.end();
    }
});


router.delete('/:id/cartItem/:Itemid' , async (req,res) => {
    
        const cartId = req.params.id;
        const Itemid = req.params.Itemid;
    
        const query = `DELETE FROM public."product_in_cart" WHERE "Cart_ID" = ${cartId} and "Product_ID" = ${Itemid}`;
    
        const result = await dbMan.executeNonQuery(query);
    
        if(!result)
        {
            res.json({success:false});
            res.end();
        }
        else{
            res.json({success:true});
            res.end();
        }
})



module.exports = router;