import mongoose from "mongoose";
import { config } from "./config.ts";

async function connectDB() {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Successfully connected to Database!");
    });
    mongoose.connection.on("error", (err) => {
      console.log("Error in connecting database", err);
    });
    await mongoose.connect(config.databaseUrl as string);
  } catch (error) {
    console.error("failed to connect with Database!", error);
    process.exit(1);
  }
}

export default connectDB;
