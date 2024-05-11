const {Schema, model } = require('../connection')
const mySchema = new Schema ({
    name : {type: String, required : true},
    email :{type:String, required:true, unique:true},
    avatar:{type:String, default :'avatar.jpg'},
    password: String,
    role: {type:String, default:'user'},
    creadeAt:Date,
    term : {type:Boolean, }
})
module.exports = model('admin', mySchema);