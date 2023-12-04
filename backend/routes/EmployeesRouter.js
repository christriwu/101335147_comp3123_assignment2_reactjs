const employeeJSONCheck = require('../middleware/employeeJSONCheck')
const express = require('express')

const EmployeeRouter = express.Router()
let EmployeeModel = require('../models/EmployeeModel')

EmployeeRouter.route('/employees').get( async(req,res)=>{
    const employeeList = await EmployeeModel.find()
    console.log(employeeList)

    res.status(200).send(employeeList)
})

//user can create new employee response code 201
EmployeeRouter.route('/employees').post(
    employeeJSONCheck,
    (request,response) =>{
        let reqData = request.body
        let employee = {
            "_id": reqData._id,
            "first_name": reqData.first_name,
            "last_name": reqData.last_name,
            "email" : reqData.email,
            "gender": reqData.gender,
            "salary": reqData.salary
        }
        //create user model object

        let new_employee = new EmployeeModel(employee)

        try{
            new_employee.save(employee)
            console.log("Employee Record Saved")
            response.status(201).send("Employee Record Saved")
        }catch(err){
            console.error(`Error in saving record ${err}`)
            response.status(500).send(err)
        }
    }
)

//user can get employee detail by id response status 200
EmployeeRouter.route('/employees/:_id').get(async (request,response)=>{

    const employeeId = request.params._id

    const Employee = await EmployeeModel.find({_id: employeeId})

    if(!Employee){
        response.status(404).send("Employee Not Found")
    }

    console.log({"message": "employee was found"}, Employee)
    response.status(200).send(Employee)

})

// user can update details by employee id response status 200
EmployeeRouter.route('/employees/:_id').put(async (request,response)=>{
    const employeeId = request.params._id
    const reqData = request.body

    let Employee = await EmployeeModel.findOneAndUpdate({_id: employeeId}, reqData)
    
    if(!Employee){
        response.status(404).send("Employee Not Found")
    }
    console.log({"message": "employee was found"}, Employee)
    Employee = await EmployeeModel.find({_id: employeeId})
    console.log({"message": "updated Employee"}, Employee)
    response.status(200).send(Employee)

})

//user can delete employee by id response status 200
EmployeeRouter.route('/employees/:_id').delete(async (request,response)=>{
    const employeeId = request.params._id
    let Employee = await EmployeeModel.findByIdAndDelete({_id: employeeId})
    if(!Employee){
        response.status(404).send("Employee Not Found")
    }
    console.log({"message": "employee was found"}, Employee)
    response.status(204).send({"message": `Employee ID:${employeeId} was deleted`})
})

module.exports = EmployeeRouter