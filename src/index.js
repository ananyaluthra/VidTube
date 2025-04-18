import dotenv from 'dotenv'
import {app} from './app.js';
import connectDB from './db/index.js';
dotenv.config({
    path:"./.env"
})
const port=process.env.PORT||8001;
app.listen(port,(req,res)=>{
    console.log(`Server is running on ${port}`)
})
connectDB().then(()=>{
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
}).catch((err)=>{
    console.log("Connection error",err)
})