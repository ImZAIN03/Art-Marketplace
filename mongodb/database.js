import mongoose from "mongoose";

let isConnected = false //

export const connectDB = async () => {
    mongoose.set('strictQuery', true)

    if (isConnected) {
        console.log("MongoDB is connected successfully!")
        return 
    }

    try {
        await mongoose.connect(process.env.MONGO_URL, {
            dbName: "artify",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnected = true

        console.log("MongoDB Connected")
    } catch (err) {
        console.log(err);
    }
}