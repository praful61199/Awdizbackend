  export const Login = (req,res) =>{
    console.log("inside login auth");
    
    res.send("welcome to login from auth ")
};

export const Register = (req,res) =>{
    console.log("inside register");
    console.log(req.body , "req.body");
    
    res.send("welcome to register after nodemon installation ")
    
};