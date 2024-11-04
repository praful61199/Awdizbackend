import User from "../models/user.schema.js";
import bcrypt from "bcrypt"

//   export const Login =  async(req,res) =>{
//     try{

//       const {name,email} = req.body.userData;
//       if(!name || !email){
//         return res.send("name and email are required")
//       }
     

//       const emailcheck = await User.findOne({email:email});
//       console.log(emailcheck , "emailcheck");
//       if(!emailcheck){
//         return res.json({message:"email not exist " ,success :false})
//       }
      

//       const encryptpassword = bcrypt.compare(password,emailcheck.password)
//       if(!encryptpassword){
//         return res.send("password not match")
//       }

//       const newuser = new User({
//         name,
//         email,
//         password : encryptpassword
//       })
//       await newuser.save()
  


    
//     res.send("welcome to login from auth ")
//     }catch(error){
//       return res.send(error)

//     }
// };

export const Login=async (req,res)=>{
  try{
  
  const{email,password}=req.body.userData;
  console.log("email",email,"password",password)
  if(!email || !password){
      return res.json({message:"Fill the fields", success:false})
  }
  const existemail= await Usermodel.findOne({email:email})
  console.log(existemail);
  if(!existemail){
      return res.json({message:"Email not found Try again",success:false})
  }
  const passwordcheck=await bcrypt.compare(password,existemail.password)
  if(!passwordcheck){
      return res.json({message:"wrong password Try again",success:false})
  }
  
  const encryptedtoken=jwt.sign({Userid:existemail._id},process.env.ENCRYPTIONSECRET);
  console.log(encryptedtoken,"ENCRYPTEDTOKEN")
  
  res.cookie("Token",encryptedtoken)
  
  return res.json({
      message:"Login Successful",
      success:true,
      Userdata:{
          email:existemail.email,password:existemail.password,name:existemail.name
      }
  
  
  
  });
  
  
  
  
  }
  catch(error){
      console.log(error);
  
  }
  }

export const Register = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body.userData;
    // console.log(name,email,password,confirmPassword,"userDetails")
    if (!name || !email || !password || !confirmPassword) {
      return res.json({ message: "All fields are required!!!!", success: false });
    }
    if (password !== confirmPassword) {
      return res.json({ message: "Password is not same as Confirm Password!!!", success: false });
    }

    const isEmailExits = await User.findOne({ email: email });
    if (isEmailExits) {
      return res.json({ message: "This Email already exists!!", success: false });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    const NewUser = new User({
      userName: name,
      email: email,
      password: hashedPassword,
    });
    console.log(NewUser, "UserData");
    const ResponseFromMongoDb = await NewUser.save();
    console.log(ResponseFromMongoDb);

    return res.json(
      { message: "Registeration complete nodemon", success: true }
    );
  } catch (error) {
    res.json({ message: error, success: false });
  }
};

// export const Register =  async (req,res) =>{
//   try{
//   const {name,email,password,confirmpassword} = req.body.userData ; 
//   // console.log(name,email,password,confirmpassword , "userdata");

//   if(!name || !email || !password || !confirmpassword){
//      return res.json({message:"All fields are mandatory" , success : false})
//   }
//   if(password!== confirmpassword){
//     return res.json({message:"password and confirmpassword does not match" , success : false})
//   }


//   const isemailexist = await User.findOne({email : email});
//   // console.log(isemailexist , "isemailexit") 
//   if(isemailexist){
//     return res.json({message:"email already exist please use another one " , success: false})
//   }

//   const hashedpassword = await bcrypt.hash(password ,10)
//   console.log(hashedpassword);
  
  

//   const Newuser = new User({
//     name ,
//     email ,             // both can be done 
//     password :hashedpassword,   // both can be done 
//   })
//   console.log(Newuser , "newuser");

//    await Newuser.save()
   
//     return res.json({message:"registration complete" , success:true})
//   }catch(error){
//     return res.json({success:false , message:error})

//   }
    
// };