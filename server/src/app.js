const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const hpp = require('hpp'); // multiple values in query string

//MiddleWares
const {notFoundHandler, errorLogger, errorHandler} = require('./middleware/error.js');

// Configurations
const corOptions = require('./config/cors');
const swaggerDocs = require('./config/swagger');
const swaggerUI = require('swagger-ui-express');

// Routes
const apiRouter = require('./routes/api.js');

const app = express();

// API Documentation
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));


if(process.env.NODE_ENV === 'development') 
{
    app.use(morgan('dev'));
}

app.use(cors(corOptions));
app.use(express.json());
app.use(hpp());

app.use('/api/v1', apiRouter);

app.use(notFoundHandler);
app.use(errorLogger, errorHandler);

module.exports = app;
