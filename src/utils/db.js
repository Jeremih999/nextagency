import mongoose from "mongoose";

async function connect() {
    try {
       await mongoose.connect(process.env.MONGO)
    } catch (error) {
        throw new Error("Failed to connect to DB")
    }
}

export default connect ;