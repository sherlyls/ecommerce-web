import ErrorHandler from "../utils/errorHandler.js";
import catchAsyncErrors from "./catchAsyncErrors.js";
import jwt from 'jsonwebtoken'

// Check if the user is authenticated or not
export const isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
    // get the cookie token 
    const { token } = req.cookies

    // console.log(token)
    if(!token) {
        return next(new ErrorHandler("Login first to access this resource", 401))
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    console.log(decoded, "decoded")

    next()
})