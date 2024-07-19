import mongoose from "mongoose";
import { DB_URL } from "./credentials";

const initDb = async () => {
  if (!DB_URL) throw Error("Db not connected!");
  await mongoose.connect(DB_URL);
  console.log("Connected to MongoDB");
};

export default initDb;
