import dotenv from "dotenv";

dotenv.config();

export default {
  port: process.env.PORT || 5000,
  corsOrigin: process.env.CORS_ORIGIN || "http://localhost:3000",
};
