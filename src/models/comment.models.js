import mongoose, {models, Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const commentSchema=new Schema(
    {
        video:{
        Type:Schema.Types.ObjectId,
        ref:"Video"

    },
    content:{
        type:String,
        ref:"Comment"
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
        timestamps:true

}
);
commentSchema.plugin(mongooseAggregatePaginate);
export const Comment=mongoose.model("Comment",commentSchema);