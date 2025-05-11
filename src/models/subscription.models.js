import mongoose, {Schema} from "mongoose";
const subscriptionSchema=new Schema(
{
    subscriber:{
        type:Schema.Types.ObjectId,// one who is subscribing
        ref:"User"
    },
    channelowner:{
        type:Schema.Types.ObjectId,//whose channel is being subscribed
        ref:"User"
    },
    
},
{timestamps:true}
);
