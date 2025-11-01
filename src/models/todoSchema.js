import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("todo", todoSchema);
