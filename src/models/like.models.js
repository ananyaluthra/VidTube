import mongoose, {Schema} from "mongoose";
const likeSchema=new Schema(
    {
                video:{
                    Type:Schema.Types.ObjectId,
                    ref:"Video"
            
                },
                comment:{
                    type:Schema.Types.ObjectId,
                    ref:"Comment"
                },
                like:{
                    type:Schema.Types.ObjectId,
                    ref:"Like"
                },
                tweet:{
                    type:Schema.Types.ObjectId,
                    ref:"Tweet"
                },
                likedBy:{
                    type:Schema.Types.ObjectId,
                    ref:"User"
                },
                    timestamps:true
            
            }
        
        )
