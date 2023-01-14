import mongoose from "mongoose";

const purchaseSchema = mongoose.Schema({
  email: { type: String },
  name: { type: String },
  pesanan: {  },
  total: { },
  reason: {type: String},
  isPaid:{type: Boolean},
  createdAt:{type:Date},
  updatedAt:{type:Date}
});

export default mongoose.model("purchase", purchaseSchema);