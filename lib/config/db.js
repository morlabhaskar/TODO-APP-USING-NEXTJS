import mongoose from "mongoose";

export const ConnectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://morlabhaskar306:ZdG5JZtg8UTfugK0@bhaskar.smjwtfm.mongodb.net/NEXT-TODO');
        console.log("DB Connected Successfully");
        
    } catch (error) {
        console.log("DB Connected Failed")
        console.log(error)
        
    }
    
}