const asyncDec = require('../utils/asyncDec');

async function getProfile(req, res, next)
{
    req.user.password = undefined;
   
    res.status(200).json(req.user);
}


module.exports = {
    getProfile: asyncDec(getProfile)
};