import User from '../models/users.js'
import catchAsyncErrors from "../middlewares/catchAsyncErrors.js"


export const registerUser = catchAsyncErrors (async (req, res) => {
    const { name, email, password } = req.body

    const user = await User.create({
        name, email, password,
    })

    res.status(201).json({
        success: true,
    })

})