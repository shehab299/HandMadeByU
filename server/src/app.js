import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import hpp from 'hpp'; // multiple values in query string

//MiddleWares
import {notFoundHandler, errorLogger, errorHandler} from './middleware/error.js';

// Configurations
import corOptions from './config/cors.js';

// Routes
import apiRouter from './routes/api.js';

const app = express();

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

export default app;





