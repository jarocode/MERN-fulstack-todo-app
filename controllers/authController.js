const CurrentUser = require('../model/usermodel');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config({path: '../config/config.env'});


const GetAuth = async (req,res) => {
    const {email, password} = req.body;
    
    // //simple validation
    // if(!name || !password ||!email ) {
    //     res.status(400).json({msg:'please enter all fields'});
    // }
    
    //check for existing user
    const validUser = await CurrentUser.findOne({email: email});
    if (!validUser) return res.status(400).json({msg:'user does not exists'});

    //validate password
    const compared = await bcrypt.compare(password, validUser.password);
    if(!compared) return res.status(400).json({msg:'invalid credentials'});

    jwt.sign(
        {id: validUser.id},
        process.env.JWT_SECRET,
        {expiresIn: 3600},
        (err, token) => {
            if(err) throw err;
            res.json({
                user: {
                    token,
                    id: validUser.id,
                    name: validUser.name,
                    email: validUser.email
                }
            })
        }
    ) 

}

const CurrentUserAuth = async (req, res) => {
    const myUser = await CurrentUser.findById(req.users.id).select('-password');
    return res.json(myUser);
}

module.exports.getAuth = GetAuth;
module.exports.currentuserAuth = CurrentUserAuth;
