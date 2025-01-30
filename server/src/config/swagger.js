// src/swagger/swagger.js
const swaggerJsDoc = require('swagger-jsdoc');
const path = require('path');

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'HandMadeByUs API',
      version: '1.0.0',
      contact: {
        name: 'shehab299@outlook.com',
      },
      server: {

      }
    },
  },
  apis: [path.resolve(__dirname, '../../docs/api/*.js')],
};



const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = swaggerDocs;