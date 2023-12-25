const dbMan = require('../db');
const validator = require('validator');
const jwt = require('jsonwebtoken');
require('dotenv').config();


//TOKEN

const generateToken = (user) =>
{
    const payload = {
        id: user.userId,
        email: user.userEmail
    }

    const secret = process.env.SECRET;
    const options = { expiresIn: '1h'};
    
    return jwt.sign(payload,secret,options);
}



//VALIDATION

const validate = (email,password) =>
{    
    if(!validator.isEmail(email))
        return false;

    if(password.length == 0)
        return false;

    return true;
}

const isUserExits = async (email) =>
{
    try{
        let q = `SELECT COUNT(email) FROM users WHERE email = '${email}'`;
        const usersNum = await dbMan.executeScaler(q);

        if(usersNum > 0)
            return true;
        else 
            return false;
    }catch(error)
    {
        console.log(error);
    }
}


//CONTROLLER FUNCTIONS


const getAllUsers = async (req,res) => {

    const {email , password} = req.body;

    const q = 'SELECT * FROM users';

    const result = await dbMan.executeQuery(q);

    if(!result)
    {
        res.end("THERE ARE NO USERS IN THE SYSTEM");
    }

    res.json(result);
    res.end();

}


const registerUser = async (req,res) => {

    try{
        const {email,password} = req.body;
        let resBody = {};

        if(!validateSignUp(email,password))
            resBody.message = "INVALID DATA";

        if(isUserExits(email))
            resBody.message = "User Already Exists";
        else 
        {
            q = `INSERT INTO users(email,password) VALUES('${email}','${password}')`;
            const insertUser = await dbMan.executeNonQuery(q);

            if(!insertUser)
            {
                resBody.message = "SOMETHING WENT WRONG"
            }
            else{
                resBody.email = email;
                resBody.message = "USER REGISTERD SUCCESSFULLY";        
            }
        }

        res.json(resBody);
        res.end();
    }
    catch(error){
        console.log(error);
    }

}

const loginUser = async (req,res) => {

    const {email,password} = req.body;
    resBody = {}


    if(!validate(email,password)){
        resBody.message = "INVALID DATA";
        resBody.success = false;
    }

    const isExists = await isUserExits(email);

    if(!isExists)
    {
        resBody.message = "Email Doesn't Exist";
        resBody.success = false;
    }
    try{
        const q = `SELECT user_id,email,password FROM users WHERE email = '${email}'`;
        const result = await dbMan.executeQuery(q);

        const user = {};
        user.userId = result[0]['user_id']
        user.userEmail = result[0]['email'];
        user.userPassword = result[0]['password'];

        
        if(password != user.userPassword){
            resBody.message = "Password Doesn't Match Username";
            resBody.success = false;
        }
        else{
            resBody.success = true;
            resBody.message = "LOGGED IN SUCCESSFULLY";
            resBody.email = user.userEmail;
            resBody.token = generateToken(user);
        }

        if(resBody.success)
            res.status(200).json(resBody);
        else 
            res.status(400).json(resBody);
    }
    catch(error){
        console.log(error);
    }
}


module.exports = {registerUser,loginUser,getAllUsers}