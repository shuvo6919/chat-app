import mongoose, { mongo } from "mongoose";

const messageSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
}, { timestamps: true })


const messageModel = mongoose.models.message || mongoose.model("message", messageSchema)

export default messageModel