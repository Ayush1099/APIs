const jwt = require("jsonwebtoken");
require('dotenv').config()

const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    /* Checks if the JWT is existing in the request header */
    if (token == null) 
    { 
        res.status(401).json({ message: "Token not available" }) 
    }
    else
    {
        /* Verifies the token fetched from the request header */
        jwt.verify(token, `${process.env.ACCESS_TOKEN_SECRET}`, function(err){
            if (err) 
            { 
                res.status(403).json({ message: "Invalid Request" }) 
            }
            else
            {
                return next();
            }
        })
    }
};

module.exports = verifyToken;