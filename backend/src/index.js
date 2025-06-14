import express from "express";
import dotenv from "dotenv"
import cookesParser from "cookie-parser"
import cors from "cors"

import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
import { connectDB } from "./lib/db.js";

dotenv.config()
const app = express();

const PORT=process.env.PORT

app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))

app.use(cookesParser())
app.use(cors({
  origin:  "http://localhost:5173",
  credentials: true
}))

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)

app.listen(PORT, () => {
  console.log("server is running on port:"+PORT);
  connectDB()
});
