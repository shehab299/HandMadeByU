const dbMan = require('../db');
const validator = require('validator');
const jwt = require('jsonwebtoken');
require('dotenv').config();


//TOKEN

const generateToken = (user) =>
{
    const payload = {
        id: user.userId,
        email: user.Username
    }

    const secret = process.env.SECRET;
    const options = { expiresIn: '1h'};
    
    return jwt.sign(payload,secret,options);
}



//VALIDATION

const validate = (Username,password) =>
{    
    if(password.length == 0)
        return false;

    return true;
}

const isUserExits = async (Username) =>
{
    try{
        let q = `SELECT COUNT(Username) FROM users WHERE email = '${email}'`;
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

    const q = 'SELECT * FROM public."Customer"';

    const result = await dbMan.executeQuery(q);

    if(!result)
    {
        res.end("THERE ARE NO USERS IN THE SYSTEM");
        return;
    }

    res.json(result);
    res.end();

}


const registerUser = async (req,res) => {

    try{
        const {Username,password} = req.body;
        let resBody = {};

        if(!validateSignUp(Username,password))
            resBody.message = "INVALID DATA";

        if(isUserExits(Username))
            resBody.message = "User Already Exists";
        else 
        {
            q = `INSERT INTO users(Username,password) VALUES('${Username}','${password}')`;
            const insertUser = await dbMan.executeNonQuery(q);

            if(!insertUser)
            {
                resBody.message = "SOMETHING WENT WRONG"
            }
            else{
                resBody.Username = Username;
                resBody.message = "USER REGISTERD SUCCESSFULLY";
                
                q = `SELECT user_id FROM users WHERE Username = ${Username}`;
                const result = await dbMan.executeQuery(q);
                const user_id = result[0]['user_id'];
                
                q = `INSERT INTO Cart (Customer_ID) VALUES (${user_id})`;
                const createCart = await dbMan.executeNonQuery(q);

                if(!createCart)
                    resBody.message = "SOMETHING WENT WRONG WHILE CREATING CART";

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

    const {Username,password} = req.body;
    resBody = {}


    if(!validate(Username,password)){
        resBody.message = "INVALID DATA";
        resBody.success = false;
    }

    const isExists = await isUserExits(Username);

    if(!isExists)
    {
        resBody.message = "Username Doesn't Exist";
        resBody.success = false;
    }
    try{
        const q = `SELECT user_id,Username,password FROM users WHERE Username = '${Username}'`;
        const result = await dbMan.executeQuery(q);

        const user = {};
        user.userId = result[0]['user_id']
        user.Username = result[0]['Username'];
        user.userPassword = result[0]['password'];

        
        if(password != user.userPassword){
            resBody.message = "Password Doesn't Match Username";
            resBody.success = false;
        }
        else{
            resBody.success = true;
            resBody.message = "LOGGED IN SUCCESSFULLY";
            resBody.Username = user.Username;
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