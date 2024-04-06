const { Schema, model, Types } = require("../connection");
const mySchema = new Schema({
  user: { type: Types.ObjectId, ref: "user" },
  html: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  nodes: { type: Array, default: [] },
  edges: { type: Array, default: [] },
});
module.exports = model("diagram", mySchema);
