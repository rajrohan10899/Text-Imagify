import mongoose from "mongoose";

const transactionDataSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  plan: { type: String, required: true },
  amount: { type: Number, required: true },
  credits: { type: Number, required: true },
  payment: { type: Boolean, default: false },
  date: { type: Number },
});

export const transactionDataModel =
  mongoose.models.transaction ||
  mongoose.model("transaction", transactionDataSchema);
