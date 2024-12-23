import conversationModel from "../models/conversationModel.js"
import messageModel from "../models/messageModel.js"
import { getReceiverSocketId, io } from "../socket/socket.js"



export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body
        const { id: receiverId } = req.params
        const senderId = req.user._id
        console.log("Hereee=", message);



        let conversation = await conversationModel.findOne({
            participants: { $all: [senderId, receiverId] },
        })

        if (!conversation) {
            conversation = await conversationModel.create({
                participants: [senderId, receiverId]
            })
        }

        const newMessage = new messageModel({
            senderId,
            receiverId,
            message
        })

        if (newMessage) {
            conversation.messages.push(newMessage._id)
        }



        //Saving the message and conversations
        // await newMessage.save()
        // await conversation.save()

        //this is will run in parallel
        await Promise.all([newMessage.save(), conversation.save()])


        //to do:  SOCKET IO FUNCTIONALITY WILL WORK HERRE------------
        const receiverSocketId = getReceiverSocketId(receiverId)
        if (receiverSocketId) {
            //io.to(<socket._id>).emit() is used to send events to specific client
            io.to(receiverSocketId).emit("newMessage", newMessage)
        }
        //-----------------------------------------------------------



        res.json({ success: true, newMessage })


    } catch (error) {
        console.log("It came here");

        console.log(error);
        res.json({ success: false, message: error.message })
    }
}


export const getMessages = async (req, res) => {
    try {
        const { id: userToChatId } = req.params
        const senderId = req.user._id

        const conversation = await conversationModel.findOne({
            participants: { $all: [senderId, userToChatId] }
        }).populate("messages")

        if (!conversation) {
            return res.status(200).json([])
        }

        const messages = conversation.messages

        res.status(200).json(messages)

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}