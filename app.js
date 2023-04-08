const express = require('express');
const bodyParser=require('body-parser');
const router=require('./Source/Routes/Routing');
require('./Source/Models/Connection');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const app=express();
app.use(bodyParser.json());


const swaggerOptions = {
    swaggerDefinition:{
        openapi: "3.0.0",
        info:{
            title:'Microservices POC',
            description:'This is REST API application created with Express. It helps to fetch and create',
            version:'1.0.0',
            contact:{
                name:"Ayush Verma",
            },
            servers:['http://localhost:3000']
        }
    },
    apis:['./Source/Routes/Routing.js']
  }
  const swaggerDocs = swaggerJSDoc(swaggerOptions);  
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/',router);

const port=process.env.PORT || 3000;
app.listen(port,()=>{console.log(`App running on port ${port}`);})
