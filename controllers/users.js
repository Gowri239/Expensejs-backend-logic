const User = require('../models/users')

function isStringInvalid(string){
    if(string == undefined || string.length === 0){
        return true
    } else{
        return false
    }
}

const signup = async (req,res) => {
    try{
        const {name,email,password} = req.body
        if(isStringInvalid(name) || isStringInvalid(email) || isStringInvalid(password)){
            return res.status(400).json({err: "Enter all details"})
        }

        await User.create({name,email,password})
            res.status(201).json({message:"successfully created new user" })
    }catch(err){
        res.status(500).json(err)
    }

 }

 module.exports = {signup};
   


