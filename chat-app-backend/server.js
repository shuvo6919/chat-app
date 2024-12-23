import express from "express"
import connectDB from "./config/mongodb.js"
import 'dotenv/config'
import authRouter from "./routes/authRoute.js"
import cors from "cors"
import messageRouter from "./routes/messageRoute.js"
import cookieParser from "cookie-parser"
import userRouter from "./routes/userRoute.js"
import { app, server } from "./socket/socket.js"


//app config
// const app = express()
const port = process.env.PORT || 4000

connectDB()


//midlewares
app.use(express.json())
app.use(cookieParser()); // Enables cookie parsing
app.use(cors({
    origin: "http://localhost:5173", // Frontend URL
    credentials: true, // Allow cookies
}));


//api endpoints
app.use("/api/auth", authRouter)
app.use("/api/message", messageRouter)
app.use("/api/users", userRouter)




app.get("/", (req, res) => {
    res.send("API working")
})

server.listen(port, () => {
    console.log("Server is running on port=", port);

})