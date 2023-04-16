const express = require('express');
const bodyParser=require('body-parser');
const router=require('./Source/Routes/Routing');
require('./Source/Models/Connection');
const auth = require("./Source/Middleware/Auth");
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const token = require("./Source/Middleware/Token");
const ErrorHandler=require("./Source/Middleware/ErrorHandler");
const app=express();

app.use(bodyParser.json());

const swaggerOptions = {
    swaggerDefinition:{
      openapi: "3.0.0",
        info:{
            title:'API',
            description:'Implemented APIs to Create and Get users from mongoDB',
            version:'1.0.0',
            contact:{
                name:"Ayush Verma",
            },
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                }
            }
        },
        security: [{
            bearerAuth: []
        }],
        
        servers:[{url:'http://localhost:3000'}]
    },
    apis:['./Source/Routes/Routing.js']
  }
  const swaggerDocs = swaggerJSDoc(swaggerOptions);  
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
  

app.post('/getToken',token.TokenGenerator);
app.use('/',auth,router);
app.use(ErrorHandler);
const port=process.env.PORT || 3000;
app.listen(port,()=>{console.log(`App running on port ${port}`);})