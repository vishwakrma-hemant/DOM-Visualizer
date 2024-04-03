const express = require('express');
const cors = require("cors")

//initialize express
const app = express();
 const  UserRouter = require("./routers/userRouter")


 app.use(express.json());
 app.use(cors({
    origin: ["http://localhost:3000"]
 }))
//middleware 
app.use("/user", UserRouter);

const port = 5000;
  
app.listen(port,()=>{
console.log("Server Started");
})


