const bcrypt = require('bcrypt')
const User = require('../models/users')

function isStringInvalid(string){
    if(string == undefined || string.length === 0){
        return true
    } 
    else{
        return false
    }
}

const signup = async (req,res) => {
    try{
        const {name,email,password} = req.body
        console.log(email)
        if(isStringInvalid(name) || isStringInvalid(email) || isStringInvalid(password)){
            return res.status(400).json({message: "Enter all details",success: false})
        }

        const saltrounds = 10;
        const hashPassword = await bcrypt.hash(password,saltrounds)
        console.log("123",hashPassword)
    
        await User.create({name,email,password : hashPassword})
        res.status(201).json({message:"successfully created new user" })
        
    }
       
    catch(err){
        res.status(500).json(err)
    }
 }

 const login = async(req,res) => {
    try{
        const {email,password} = req.body
        if(isStringInvalid(email) || isStringInvalid(password)){
            console.log(email)
            return res.status(400).json({message: "Enter all details",success:false})
        }

        const user = await User.findAll({where: {email}})
        if(user.length>0){
            bcrypt.compare(password,user[0].password,(req,result) => {
                if(result === true){
                    res.status(200).json({message: "user login successful",success:true})
                }else{
                res.status(401).json({message: "user not authorized",success:false})
                }
            })
        }
        else{
            res.status(404).json({message:"User not found",success:false})
        }
    }
    catch(err){
        res.status(500).json({message:err,success:false})

    }

}

 module.exports = {signup,login};
   


