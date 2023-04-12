const jwt = require("jsonwebtoken");
require('dotenv').config()

exports.TokenGenerator=(req,res)=>{
    /* Payload - along with userName, also contains issued at time and expiry time */
    const payload = { id: req.body.userId, iat: Math.floor(Date.now() / 1000) - 60, exp: Math.floor(Date.now() / 1000) + (60 * 60) };
    /* jwt.sign() creates the JSON Web Token */
    const accessToken = jwt.sign(payload, `${process.env.SecretKey}`);
    res.json({ payload:payload, accessToken: accessToken });
}