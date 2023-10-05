const jwt = require("jsonwebtoken");
require('dotenv').config()

exports.TokenGenerator=(req,res)=>{
    const payload = { username: req.headers.username, password:req.headers.password, iat: Math.floor(Date.now() / 1000) - 60, exp: Math.floor(Date.now() / 1000) + (60 * 60) };
    const accessToken = jwt.sign(payload, `${process.env.SecretKey}`);
    res.json({ payload:payload, accessToken: accessToken });
}