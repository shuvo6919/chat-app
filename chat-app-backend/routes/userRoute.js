import express from "express"
import authUser from "../middlewares/authUser.js"
import { getUsersForSidebar } from "../controllers/userController.js"

const userRouter = express.Router()

userRouter.get("/", authUser, getUsersForSidebar)

export default userRouter