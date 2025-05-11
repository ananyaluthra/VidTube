import mongoose,{Schema} from "mongoose";
const playlistSchema = new Schema(
    {
        name:{
            Type:String,
            required:true
    
        },
        description:{
            type:String,
            required:true
        },
        views:{
            type:Number,
            default:0
        },
        videos:{
            type:Schema.Types.ObjectId,
            ref:"Video"
        },
        owner:{
            type:Schema.Types.ObjectId,
            ref:"User"
        },
            timestamps:true
    
    }

)