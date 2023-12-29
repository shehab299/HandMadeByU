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
    if(!password)
        return false;

    return true;
}

const isUserExists = async (Username) =>
{
    try{
        let q = `SELECT COUNT("Username") FROM "Customer" WHERE "Username" = '${Username}'`;
        const usersNum = await dbMan.executeScaler(q);

        if(usersNum > 0)
            return true;
        else 
            return false;
    }catch(error)
    {
        console.log(error);
        return false;
    }
}


//CONTROLLER FUNCTIONS


const getAllUsers = async (req,res) => {

    const q = 'SELECT * FROM "Customer"';

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
        const {username,firstName,middleName,lastName,password,confirmPassword} = req.body;

        let resBody = {success: false};

        if(!validate(username,password))
        {
            res.json(resBody);
            res.end();
            return;
        }

        const isExists = await isUserExists(username);
        if(isExists){
            resBody.success = false;
        }
        else 
        {
            q =  `INSERT INTO public."Customer"("Password", "Username", "First_Name", "Middle_Name", "Last_Name", is_seller)
                VALUES ('${password}', '${username}', '${firstName}', '${middleName}', '${lastName}', false);`;
            
            const insertUser = await dbMan.executeNonQuery(q);

            if(!insertUser)
            {
                resBody.success = false;
            }
            else{
                resBody.username = username;
                
                q = `SELECT "CID" FROM "Customer" WHERE "Username" = '${username}'`;
                const result = await dbMan.executeQuery(q);

                if(!result){
                    resBody.success = false;
                }
                else{
                    const user_id = result[0]['CID'];

                    q = `INSERT INTO "Cart"("Customer_ID") VALUES (${user_id})`;
                    const createCart = await dbMan.executeNonQuery(q);
    
                    if(!createCart){
                        resBody.success = false;
                    }
                    else{
                        resBody.success = true;
                    }
                }
            }
        }

        res.json(resBody);
        res.end();
    }
    catch(error){
        console.log(error);
    }

}


const loginUser = async (req, res) => {
    const { Username, password } = req.body;
    let resBody = {}; // Added missing 'let' declaration

    if (!validate(Username, password)) {
        resBody.success = false;
        resBody.msg = "Invalid Username or Password";
        return res.status(400).json(resBody); // Return early on validation failure
    }

    const isExists = await isUserExists(Username); // Corrected typo in function name

    if (!isExists) {
        resBody.success = false;
        resBody.msg = "Invalid Username or Password";
        return res.status(400).json(resBody); // Return early if user does not exist
    }

    try {
        let q = `SELECT * FROM "Customer" WHERE "Username" = '${Username}'`;
        const result = await dbMan.executeQuery(q);

        if (result.length === 0) {
            resBody.success = false;
            resBody.msg = "User not found";
            return res.status(404).json(resBody); // Return early if user not found
        }

        const user = {
            userId: result[0]['CID'],
            Username: result[0]['Username'],
            firstName: result[0]['first_name'],
            middleName: result[0]['middle_name'],
            lastName: result[0]['last_name'],
        };

        const storedPassword = result[0]['Password'];

        if (password !== storedPassword) {
            resBody.success = false;
            resBody.msg = "Password is incorrect";
            return res.status(401).json(resBody); // Return early on incorrect password
        }

        q = `SELECT "id" FROM "Cart" WHERE "Customer_ID" = ${user.userId}`;
        const cartResult = await dbMan.executeQuery(q);

        user.cartId = cartResult.length > 0 ? cartResult[0]['id'] : null;

        resBody.success = true;
        resBody.user = user; // Changed 'Username' to 'user'
        resBody.token = generateToken(user);

        res.status(200).json(resBody);
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, msg: "Internal Server Error" });
    }
};


module.exports = {registerUser,loginUser,getAllUsers}