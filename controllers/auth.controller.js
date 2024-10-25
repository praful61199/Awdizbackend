import User from "../models/user.schema.js";

  export const Login = (req,res) =>{
    console.log("inside login auth");
    
    res.send("welcome to login from auth ")
};

export const Register =  async (req,res) =>{
  try{
  const {name,email,password,confirmpassword} = req.body.userData ; 
  // console.log(name,email,password,confirmpassword , "userdata");

  if(!name || !email || !password || !confirmpassword){
     return res.send("All fields are mandatory")
  }
  if(!password == confirmpassword){
    return res.send("password and confirmpassword does not match")
  }

  const Newuser = new User({
    name : name,
    email : email,
    password :password,
  })
  console.log(Newuser , "newuser");

  const responsefrommongodb = await Newuser.save()
  console.log(responsefrommongodb);
  
  
  
    
    return res.send("welcome to register after nodemon installation ")
  }catch(error){
    return res.send(error)

  }
    
};