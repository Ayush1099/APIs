const express = require('express');
const bodyParser=require('body-parser');
const router=require('./Source/Routes/Routing');
require('./Source/Models/Connection');
const auth = require("./Source/Middleware/Auth");
const token = require("./Source/Middleware/Token");
const app=express();

app.use(bodyParser.json());
app.post('/getToken',token.TokenGenerator);
app.use('/',auth,router);

const port=process.env.PORT || 3000;
app.listen(port,()=>{console.log(`App running on port ${port}`);})