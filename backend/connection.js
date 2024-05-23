//attach mongoose
const mongoose = require('mongoose');

//connect to mongoose server
const url = "mongodb+srv://hemantvishwakarma0987:123hemant@cluster0.gspua5o.mongodb.net/DOM?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(url)
.then(()=>{
    console.log("Connected to backend server successfully");
})
.catch((err)=>{
    console.log("Error connecting to backend server");
})
module.exports = mongoose;
