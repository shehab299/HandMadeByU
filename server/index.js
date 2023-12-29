// NODE MODULES
const express = require("express");
const cors = require("cors")
require('dotenv').config()

//ROUTES
const comptetionRoutes = require('./routes/comptetion');
const productsRoutes = require('./routes/product');
const shopRoutes = require('./routes/shop');
const followRoutes = require('./routes/follow');
const cartRoutes = require('./routes/cart');

//MIDDLEWARE
const authMiddleWare = require('./Middlewares/authMiddleWare');
//CONTROLLERS
const authController = require('./controllers/auth')

//DATABASE
const dbMan = require("./db")


const app = express();


app.use(cors());
app.use(express.json());
app.use((req,res,next) => {
    console.log(req.method,req.url);
    next();
})


app.use('/api/comptetion',comptetionRoutes);
app.use('/api/cart',cartRoutes);
app.use('/api/product',productsRoutes);
app.use('/api/shop',shopRoutes);
app.use('/api/follow',followRoutes);
app.post('/register' , authController.registerUser);
app.post('/login', authController.loginUser);
app.get('/users',authController.getAllUsers)



//START SERVER
app.listen(process.env.PORT , () => {
    console.log("SERVER STARTED LISTENING FOR INCOMING REQUESTS ON PORT " + process.env.PORT);
})

