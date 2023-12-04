const express = require('express');
let mongoose = require('mongoose')
const userRouter = require('./routes/UsersRouter');
const employeeRouter = require('./routes/EmployeesRouter')

const app = express();
const PORT = 3000;

mongoose.connect('mongodb+srv://chrisTri:GP1y6xvBEGFrjqJD@cluster0.xfp6unm.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB"))



app.use(express.json());

app.use("/api/v1/user",userRouter)
app.use("/api/v1/emp",employeeRouter)



app.listen(PORT,(error)=>{
    if(!error){
        console.log(`Server running at http://localhost:${PORT}/`)
    }
    else{
        console.log(`Error: ${error}`)
    }
})