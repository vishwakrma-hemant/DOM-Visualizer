const {Schema, model } = require('../connection')
const mySchema = new Schema ({
    name : {type: String, required : true},
    email :{type:String, required:true, unique:true},
    number: Number,
    message: String,
    creadeAt:Date,
    term : {type:Boolean, }
})
module.exports = model('contactUs', mySchema);