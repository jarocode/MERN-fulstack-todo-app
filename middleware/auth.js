const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config({path: '../config/config.env'});

const auth = (req, res, next) => {
    const token  = req.header('x-auth-token');

    //check for token
    if(!token) {
        //401-unauthorised user
        return res.status(401).json({msg: 'No token, authorization denied'});
    }

    try {
        //verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        //Add user from payload
        req.users = decoded;
        next();
    } catch (error) {
       return res.status(401).json({msg: 'Token is not valid'});
    }
    
};

module.exports = auth;