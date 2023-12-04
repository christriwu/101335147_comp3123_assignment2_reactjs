const express = require('express')
const UserRouter = express.Router()
let UserModel = require('../models/UserModel')


UserRouter.route("/signup").post( async(req,res)=>{
    let reqData = req.body
    if(reqData == undefined){
        res.status(400).send({
            "status":false,
        "message":"Invalid data"})
        console.log(reqData)

    }
    let user = {
        "user_name": reqData.unm,
        "email": reqData.email,
        "password": reqData.upwd
    }
    //create user model object

    let new_user = new UserModel(user)

    try{
        await new_user.save(user)
        console.log("User Record Saved")
        res.status(201).send("User Record Saved")
    }catch(err){
        console.error(`Error in saving record ${err}`)
        res.status(500).send(err)
    }

})

UserRouter.route("/login").post(async (req,res)=>{
    const reqData = req.body;

    
    const user = await UserModel.findOne({user_name: req.body.unm})
    if(!user){
        res.status(400).json({error: "User does not exist"})
    }

    if(user.password !== req.body.upwd){
        console.log(`${req.body.upwd} does not match ${user.password}`)
        return res.status(401).json({ error: 'Password is incorrect' })
    
    }

    res.status(200).json({message:"login Successful"})
})



module.exports = UserRouter