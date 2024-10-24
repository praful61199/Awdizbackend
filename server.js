import express  from "express"; 
import dotenv from "dotenv"
// import { Login, Register } from "./controllers/auth.controller.js"; 

import allRoutes from "./routes/index.js"

const app = express() 

app.use(express.json())  // inbuilt middleware // it parse all requests
dotenv.config()

app.get("/", (req,res) =>{
    res.send("welcome to homepage.");
});

// app.post("/login" ,Login );

// app.post("/register" , Register)

app.use("/api/v1", allRoutes)




app.listen(process.env.PORT, ()=>{
    console.log("server is running on port 8000");
    
});