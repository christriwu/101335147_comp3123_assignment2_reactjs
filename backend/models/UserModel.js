
let mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({

    user_name: {
        type: String,
        required: true,
        unique: true,
        validate(unm){
            if(unm.length < 2) throw Error("Must be at least 2 characters")
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(email){
            if(email.length < 2) throw Error("Must be at least 2 characters")
        }
    },
    password: {
        type: String,
        required: true,
        validate(password) {
            if(password < 8) throw new Error("must be at least 8 characters")
        }
    }
})

const User  = mongoose.model("user", UserSchema)
module.exports = User