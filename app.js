const express = require('express');
const bodyParser=require('body-parser');
const router=require('./Source/Routes/Routing');
require('./Source/Models/Connection');
const auth = require("./Source/Middleware/Auth");
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerConfig');
const token = require("./Source/Middleware/Token");
const ErrorHandler=require("./Source/Middleware/ErrorHandler");
const app=express();

app.use(bodyParser.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/getToken',token.TokenGenerator);
app.use('/',auth,router);
app.use(ErrorHandler);
const port=process.env.PORT || 3000;
app.listen(port,()=>{console.log(`App running on port ${port}`);})