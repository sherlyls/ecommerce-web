import express from "express";
const app = express()
import dotenv from 'dotenv'
import cookieParser from "cookie-parser"
import { connectDatabase } from './config/dbConnect.js';
import errorMiddleware from "./middlewares/errors.js"

// Handle Uncaught Exceptions
process.on("uncaughtException", (err) => {
    console.log(`ERROR: ${err}`)
    console.log("Shutting down server due to Uncaught Exception")
    process.exit(1)
})

dotenv.config({ path: 'backend/config/config.env'})

// Connecting to database
connectDatabase();

app.use(express.json())
app.use(cookieParser())


// import all routes
import productRoutes from './routes/products.js'
import authRoutes from './routes/auth.js'

app.use("/api/v1", productRoutes)
app.use("/api/v1", authRoutes)

// Using error middleware
app.use(errorMiddleware)

app.listen(process.env.PORT, () => {
    console.log(`Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode`)
})

// Handle Unhandled Promise
process.on('unhandledRejection', (err) => {
    console.log(`ERROR: ${err}`)
    console.log("Shutting down server due to Unhandled Promise Rejection")
    server.close(() => {
        process.exit(1)
    })
})