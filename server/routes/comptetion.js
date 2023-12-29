const express = require('express');
const router = express.Router();
const dbMan = require('../db');
const validator = require('validator');

router.get('/:id' , async (req,res) => {

    const id = req.params.id;

    const query =  `SELECT * FROM public."Competition", public."Shop" 
                    WHERE "Competition_ID" = ${id} and "Shop"."SID" = "Competition"."SID";`;

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
});

router.get('/:id/participant' , async (req,res) => {

    const id = req.params.id;

    const query = `SELECT "Username","First_Name", "Middle_Name", "Last_Name"
                   FROM public."Participte_Competition", public."Customer"
                   WHERE "Competition_ID" = ${id}
                   AND "Customer"."CID" = "Participte_Competition"."CID";`   

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


module.exports = router;