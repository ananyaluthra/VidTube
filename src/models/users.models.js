import mongoose, {Schema} from "mongoose";
const userSchema = new Schema(
{
    username: {
        type: String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    fullname:{
        type:String,
        required:true,
        trim:true,
        index:true
    },
    avatar:{
        type:String,
        required: true,
    },
    coverImage:{
        type:String,   
    },
    watchHistory:[
        {
            type:Schema.Types.ObjectId,
            ref:"Video"
        }
    ],
    password:{
        type:String,
        required:[true,"password is required"]
    },
    refreshToken:{
        type:String
    }

}
)
userSchema.pre("Save",async function(next){
if(!this.modified("password"))return next()
    this.password=bcrypt.hash(this.password,10)
next();
})
userSchema.methods.isPasswordCorrect=async function(password){
    return await bcrypt.compare(password,this.password)    
}
export const User = mongoose.model("User",userSchema);