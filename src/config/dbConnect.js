import mongoose from "mongoose";
import dotenv from "dotenv/config"

export async function dbConnect() {
  try {
    await mongoose.connect(process.env.URL);
    console.log("Mongodb Connected");
  } catch (error) {
    console.log("MongoDb Not Connected ", error);
  }
}
