const mongoose=require("mongoose")


const connect=()=>{
    return mongoose.connect(
        "mongodb+srv://braj:braj_123@cluster0.jpxr8.mongodb.net/Eval2?retryWrites=true&w=majority"
    )
}
module.exports=connect;