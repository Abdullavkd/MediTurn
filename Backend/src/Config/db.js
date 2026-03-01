import mongoose from "mongoose"

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/mediturn");
        console.log(`MongoDB Connected: ${connect.connection.host}`)
    } catch (error) {
        console.error(`Database Connection Error: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;