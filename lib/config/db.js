import mongoose from "mongoose";
// import dotenv from "dotenv"
// dotenv.config()

export const ConnectDB = async () => {
    // const MONGO_URI = process.env.MONGO_URL
    try {
        await mongoose.connect('mongodb+srv://morlabhaskar306:ZdG5JZtg8UTfugK0@bhaskar.smjwtfm.mongodb.net/NEXT-TODO');
        // await mongoose.connect(MONGO_URI)
        console.log("DB Connected Successfully")
        
    } catch (error) {
        console.log("DB Connected Failed")
        console.log(error)
        
    }
    
}