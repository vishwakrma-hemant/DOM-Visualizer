const express = require('express');
const cors = require("cors")

const port = 5000;
//initialize express
const app = express();
 const  UserRouter = require("./routers/userRouter")
 const DiagramRouter = require("./routers/diagramRouter")
 const ContactRouter = require("./routers/contactRouter");


 app.use(express.json());
 app.use(cors({
    origin: ["http://localhost:3000"]
 }))
//middleware 
app.use("/user", UserRouter);
app.use("/diagram", DiagramRouter);
app.use("/contactUs",ContactRouter);
  
app.listen(port,()=>{
console.log("Server Started");
})


