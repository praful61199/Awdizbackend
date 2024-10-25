import { Schema ,model } from "mongoose";


const userModel = new Schema({
    name : String,
    email : {type :String, required :true} ,
    password : String,
    age : Number
});

const User = model("User" , userModel)

export default User;