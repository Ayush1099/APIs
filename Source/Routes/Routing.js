const express=require('express');
const routing=express.Router();
const controller=require('../Controller/UserController');

routing.post('/registerUser',controller.RegisterUser)
routing.get('/getUser/:userId',controller.GetUser)

module.exports = routing;