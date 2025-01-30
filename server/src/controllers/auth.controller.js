const asyncDec = require('../utils/asyncDec');
const AppError = require('../errors/AppError');
const { User } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//Validation

async function login(req, res, next) {

    const {email, password} = req.body;

    const user = await User.findOne({where: {email}});

    if(!user){
        return next(new AppError('Invalid email or password', 401));
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch){
        return next(new AppError('Invalid email or password', 401));
    }

    const payload = {
        userId: user.id,
        username: user.username
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES_IN});

    res.status(200).json({
        status: 'success',
        data: {
            token
        }
    });
}


async function register(req, res, next){

    const {
        firstName,
        middleName,
        lastName,
        email,
        username,
        password,
        age
    } = req.body;

    if(await User.findOne({where: {email}})){
        return next(new AppError('Email already exists', 400));
    }

    if(await User.findOne({where: {username}})){
        return next(new AppError('Username already exists', 400));
    }

    const user = await User.create({
        firstName,
        middleName,
        lastName,
        email,
        username,
        password,
        age
    });

    res.status(201).json({
        status: 'success',
        data: {
            user
        }
    });
}


module.exports = {
    login: asyncDec(login),
    register: asyncDec(register)
}









