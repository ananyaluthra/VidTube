//for database connections
import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";
const connectDB=async()=>{
    try{
       const connectionInstance= await mongoose.connect(`mongodb+srv://youtubeuser:youtubeuser1234@cluster0.ypdp42r.mongodb.net/${DB_NAME}`)
        console.log(`\n MongoDB Connected! DB Host:${connectionInstance.connection.host}`);
    }
    catch(error){
        console.log("MongoDB Connection error",error);
        process.exit(1);

    }

}
export default connectDB;
