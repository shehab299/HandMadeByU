const express = require('express');
const router = express.Router();

router.get('/' , async (req , res) => {

    const status = req.query.status;
    const {userId} = req.body;

    if(status == 'toReview')
    {
        query = `SELECT * FROM public."Order" WHERE "Status" = 'toReview' and "CID" = ${req.user.userId}`

        const result = await dbMan.executeQuery(query);
    }
    else{
        query = `SELECT * FROM public."Order" WHERE "CID" = ${req.user.userId}`

        const result = await dbMan.executeQuery(query);
    }

    if(!result)
    {
        res.status(404).json({found:false,data:null});
        res.end();
    }
    else{
        res.status(200).json({found:true,data:result});
        res.end();
    }
})

router.get('/:id/product' , async (req , res) => {

    const orderId = req.params.id;

    query = `SELECT * FROM public."Order_Product",, WHERE "OID" = ${orderId}`

    const result = await dbMan.executeQuery(query);

    if(!result)
    {
        res.status(404).json({found:false,data:null});
        res.end();
    }
    else{
        res.status(200).json({found:true,data:result});
        res.end();
    }
}




module.exports = router;
