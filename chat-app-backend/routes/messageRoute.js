import express from "express"
import { getMessages, sendMessage } from "../controllers/messageController.js"
import authUser from "../middlewares/authUser.js"

const messageRouter = express.Router()

messageRouter.post("/send/:id", authUser, sendMessage)
messageRouter.get("/:id", authUser, getMessages)

export default messageRouter

