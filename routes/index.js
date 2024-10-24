import { Router } from "express"; 
import authRoutes from "./auth.routes.js"

const routes = Router()  

routes.use("/auth" , authRoutes)
// routes.use("/admin")
// routes.use("/payment")


export default routes ;