import dotenv from "dotenv";
dotenv.config();

export const { APP_PORT, PRIVATE_KEY, NODE_ENV, DB_URL } = process.env;
