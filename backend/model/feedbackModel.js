const {Schema, model } = require('../connection')

const mySchema = new Schema ({
    name : {type: String, required : true},
    email :{type:String, required:true, unique:true},
    review: String,
    rating: String,
    creadeAt:{type : Date, default: Date.now}
})
module.exports = model('feedback', mySchema);