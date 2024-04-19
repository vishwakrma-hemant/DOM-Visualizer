const {Schema, model } = require('../connection')
const mySchema = new Schema ({
    name : {type: String, required : true},
    email :{type:String, required:true, unique:true},
    number: String,
    message: String,
    creadeAt:{type : Date, default: Date.now}
})
module.exports = model('contactUs', mySchema);