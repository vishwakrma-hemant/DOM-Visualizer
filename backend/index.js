const express = require('express');

//initialize express
const app = express();
 const  UserRouter = require("./routers/userRouter")

//middleware 
app.use("user", UserRouter);

const port = 5000;
  
app.listen(port,()=>{
console.log("Server Started");
})


