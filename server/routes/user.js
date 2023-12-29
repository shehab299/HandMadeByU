const express = require('express');
const router = express.Router();

router.get('/:id/shop', async (req,res) => {

    const userId = req.params.id;

    const query = `SELECT * FROM public."Shop" WHERE "Shop"."SID" = ${userId}`;

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


module.exports = router;
