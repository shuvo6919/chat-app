import userModel from "../models/userModel.js";



export const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id

        const filteredUsers = await userModel.find({ _id: { $ne: loggedInUserId } }).select("-password")

        res.status(200).json(filteredUsers)


    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}