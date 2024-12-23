import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs"
import generateTokenAndSetCookie from "../utilities/generateToken.js";



//Api to signup
export const signup = async (req, res) => {
    try {
        const { fullName, userName, password, confirmPassword, gender } = req.body

        const user = await userModel.findOne({ userName })
        if (user) {
            return res.json({ success: false, message: "User Name is already used" })
        }

        if (password !== confirmPassword) {
            return res.json({ success: false, message: "Password doesn't match" })
        }

        //Hashed password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        //Default profile picture
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`

        const userData = {
            fullName,
            userName,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        }

        const newUser = new userModel(userData)
        await newUser.save()

        if (newUser) {

            generateTokenAndSetCookie(newUser._id, res)

            res.json({
                success: true,
                message: "User created successfully",
                _id: newUser._id,
                fullName: newUser.fullName,
                userName: newUser.userName,
                profilePic: newUser.profilePic,
            })
        }


    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}


//api to login
export const login = async (req, res) => {
    try {
        const { userName, password } = req.body

        const user = await userModel.findOne({ userName })
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "")

        if (!user || !isPasswordCorrect) {
            return res.json({ success: false, message: "Username or Password is incorrect" })
        }

        generateTokenAndSetCookie(user._id, res)

        res.json({
            success: true,
            message: "User logged in successfully.",
            _id: user._id,
            fullName: user.fullName,
            userName: user.userName,
            profilePic: user.profilePic,
        })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

//api to logout
export const logout = async (req, res) => {
    try {
        res.cookie("jwt", "", {
            maxAge: 0
        })

        res.json({ success: true, message: "Logged out successfully" })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}