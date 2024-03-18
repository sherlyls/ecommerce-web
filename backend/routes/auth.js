import express from "express"
const router = express.Router()
import { loginUser, logoutUser, registerUser } from "../controllers/authControllers.js"

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/logout").get(logoutUser)

export default router