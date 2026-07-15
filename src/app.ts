import express from "express";
import  cors from "cors";
import morgan from "morgan";
import todoRoutes from "./modules/todo/todo-routes.js"
import authRoutes from "./modules/authentication/auth-routes.js"
import userRoutes from "./modules/user/user-routes.js"

const app=express()

app.use(express.json());
app.use (express.urlencoded({extended:true}));
app.use(cors());
app.use(morgan("dev"));

//routes
app.use("/api/auth",authRoutes)
app.use("/api/user", userRoutes)
app.use("/api/todos",todoRoutes)

// health check 

app.get("/", (req, res)=>{
    res.status(200).json({sucess:true,message:"Todo Api is running"})
})

export default app;