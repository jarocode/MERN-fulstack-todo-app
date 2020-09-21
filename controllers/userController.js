const CurrentUser = require('../model/usermodel');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config({path: '../config/config.env'});

const GetUser = async (req, res, next) => {
    res.send('user!!')
}

const PostUser = async (req,res) => {
    const {name, email, password} = req.body;
    
    //simple validation
    if(!name || !password ||!email ) {
        res.status(400).json({msg:'please enter all fields'});
    }
    
    //check for existing user
    const existingEmail = await CurrentUser.findOne({email: email});
    if (existingEmail) return res.status(400).json({msg:'user already exists'});

    //Create salt & hash
    const newUser = new CurrentUser({
        name,
        email,
        password
    })
    
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, async (err, hash) => {
            if(err) throw err;
            newUser.password = hash;
            const recentUser = await newUser.save();
            jwt.sign(
                {id: recentUser.id},
                process.env.JWT_SECRET,
                {expiresIn: 3600},
                (err, token) => {
                    if(err) throw err;
                    res.json({
                        user: {
                            token,
                            id: recentUser.id,
                            name: recentUser.name,
                            email: recentUser.email
                        }
                    })
                }
            )
            
        });
    })
    
    

}

module.exports.getUser = GetUser;
module.exports.postUser = PostUser;
