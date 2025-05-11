import {v2 as cloudinary} from 'cloudinary';
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})
const uploadonCloudinary=async (localFilePath) =>{
try{
    const response = await cloudinary.uploader.upload(
        localFilePath,{
            resource_type: "auto"
        }
    )
    console.log("File uploaded on cloudinary");
    //once file is uploaded, delete it from the server
    fs.unlinkSync(localFilePath)
}
catch(error){
    fs.unlinkSync(localFilePath)
    return null
}
}
export {uploadonCloudinary}