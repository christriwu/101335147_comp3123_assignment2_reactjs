const employeeJSONCheck = (request,response,next) =>{
    if(request.body == undefined){
        response.status(400).send({
            "status":false,
        "message":"Invalid data"})
        console.log(request.body)
    }

    next()
}

module.exports = employeeJSONCheck