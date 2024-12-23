import jwt from "jsonwebtoken"
import userModel from "../models/userModel.js"

const authUser = async (req, res, next) => {
    try {

        const token = req.cookies.jwt

        if (!token) {
            return res.json({ success: false, message: "Unauthorized - No Token Provided" })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if (!decoded) {
            return res.json({ success: false, message: "Unauthorized - Invalid Token" })
        }

        const user = await userModel.findById(decoded.userId)

        if (!user) {
            return res.json({ success: false, message: "User not found!" })
        }

        req.user = user
        next()

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

export default authUser