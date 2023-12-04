
let mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    _id :{
        type: Number,
        required: true,
        validate(id){
            if(id < 0) throw Error("ID must be positive")
        }
    },
    first_name: {
        type: String,
        required: true,
        validate(fn){
            if(fn.length < 2) throw Error("Must be at least 2 characters")
        }
    },
    last_name: {
        type: String,
        required: true,
        validate(ln){
            if(ln.length < 2) throw Error("Must be at least 2 characters")
        }
    },
    email: {
        type: String,
        required: true,
        validate(email) {
            if(email.length < 5) throw new Error("must be at least 8 characters")
        }
    },
    gender:{
        type: String,
        enum:['Female','Male', 'Other']
        
    },
    salary:{
        type: Number,
        required: true,
        validate(salary){
            if(salary < 0) throw Error("Salary must be positive")
        }
    }
})

const Employee  = mongoose.model("employee", EmployeeSchema)
module.exports = Employee