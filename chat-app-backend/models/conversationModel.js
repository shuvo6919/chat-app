import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({

    participants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
        },

    ],
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "message",
            default: [],
        },
    ],

}, { timestamps: true })

const conversationModel = mongoose.models.conversation || mongoose.model('conversation', conversationSchema)

export default conversationModel