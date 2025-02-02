const asyncDec = require('../utils/asyncDec');
const AuthService = require('../services/auth.service')

async function login(req, res, next) {

    const { email, password } = req.body;
    const token = await AuthService.login(email, password);

    res.status(200).json({
        status: 'success',
        data: { token }
    });
}

async function signup(req, res, next) {

    const user = await AuthService.register(req.body);

    res.status(201).json({
        status: 'success',
        data: { user }
    });

}


module.exports = {
    login: asyncDec(login),
    signup: asyncDec(signup)
}