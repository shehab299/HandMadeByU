const verigyToken = (token) => {
    const secret = process.env.SECRET;
    const decodedResults = {};

    try{
        const decoded = jwt.verify(token,secret);
        return { success : true, data: decoded , error: null};
    }
    catch(error){
        return { success : false, error: error.message, data: null};
    }
}

const isLoggedIn = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ success: false, error: 'Unauthorized: No token provided' });
    }

    const tokenVerification = verifyToken(token.replace('Bearer ', ''));

    if (tokenVerification.success) {
        req.user = tokenVerification.data;
        next();
    } else {
        return res.status(401).json({ success: false, error: 'Unauthorized: Invalid token' });
    }
}

module.exports = {isLoggedIn}