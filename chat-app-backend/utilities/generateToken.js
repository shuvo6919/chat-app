import jwt from "jsonwebtoken"

const generateTokenAndSetCookie = (userId, res) => {

    console.log("came in generatetoken fnc");

    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "15d",
    })
    console.log(token);


    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
        // sameSite: "none", // Allow cross-origin requests
        secure: process.env.NODE_ENV !== "development"
    })

}

export default generateTokenAndSetCookie