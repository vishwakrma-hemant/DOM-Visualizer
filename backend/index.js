const express = require('express');
const cors = require("cors")

const port = 5000;
//initialize express
const app = express();
 const  UserRouter = require("./routers/userRouter")
 const DiagramRouter = require("./routers/diagramRouter")
 const ContactRouter = require("./routers/contactRouter");
 const FeedbackRouter = require("./routers/feedbackRouter");
 const UtilRouter = require("./routers/utilRouter");
 const AdminRouter = require("./routers/adminRouter");


 app.use(express.json());
 app.use(cors({
    origin: ["http://localhost:3000"]
 }))
//middleware 
app.use("/user", UserRouter);
app.use("/diagram", DiagramRouter);
app.use("/contact",ContactRouter);
app.use("/feedback",FeedbackRouter);
app.use("/util",UtilRouter);
app.use("/admin",UtilRouter);

  
app.listen(port,()=>{
console.log("Server Started");
})


