const User = require('../models/users.model');
const {body, validationResult} = require('express-validator');

const createUser = async (req, res)=> {
    try {
        const error = validationResult(req);
        if(!error.isEmpty()){
            return res.status(400).json({errors: error.array()});
        }
        console.log(req.body);
        const duplicateUser = await User.findOne({username: req.body.username});
        if(duplicateUser){
            return res.status(400).json({message:"user already exists"});
        }
        const user = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        })
        if(!user){
            return res.status(400).json({message:"user not created"});
        }
        return res.status(200).json(user);
    } 
    catch (error) {
        return res.status(400).json({message: error.message});
    }
};
module.exports = {createUser};