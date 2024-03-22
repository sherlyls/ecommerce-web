import ErrorHandler from "../utils/errorHandler.js";
import catchAsyncErrors from "./catchAsyncErrors.js";
import jwt from 'jsonwebtoken'
import  User from "../models/users.js";

// Check if the user is authenticated or not
export const isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
    // get the cookie token 
    const { token } = req.cookies

    // console.log(req.cookies,"token")
    if(!token) {
        return next(new ErrorHandler("Login first to access this resource", 401))
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    // console.log(decoded, "decoded")
    req.user = await User.findById(decoded.id)
    // console.log(req.user, "req.user")

    next()
})

// Authorize user roles
export const authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return next(new ErrorHandler(`Role (${req.user.role}) is not allowed to access thi resource`, 403))
        }
        next()
    }
}
