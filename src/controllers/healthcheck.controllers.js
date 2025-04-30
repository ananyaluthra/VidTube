import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../uti;s/asyncHandler.js"
const healthcheck = (req,res)=>{
    res.status(200).json(new ApiResponse(200, "OK","Health check passed"))
}
export {healthcheck}