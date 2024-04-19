const { Schema, model, Types } = require("../connection");
const mySchema = new Schema({
  user: { type: Types.ObjectId, ref: "user" },
  name: String,
  html: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});
module.exports = model("diagram", mySchema);
