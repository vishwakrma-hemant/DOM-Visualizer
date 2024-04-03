const {Schema, model } = require('../connection')
const mySchema = new Schema ({
    uploadedBy : {type: String, required : true},
    title :{type:String, required:true},
    image:String,
    upLoadDate:Date,
    likes:{type:Number,defaut :0},
    shares: {type:Number,defaut :0},
})
module.exports = model('post', mySchema);