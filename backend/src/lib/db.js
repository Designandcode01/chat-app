import mongoose from "mongoose";

export async function connectDB() {
    try {
        const mongoUri = process.env.MONGO_URI

        if (!mongoUri) {
            throw new error("MONGO_URI is required")
        }

        await mongoose.connect(mongoUri)
        console.log("Mongo DB is connected")
    } catch (error) {
        console.error("MongoDB connection error", error.message)
        process.exit(1) // 1 means failure and 0 means success
    }
}