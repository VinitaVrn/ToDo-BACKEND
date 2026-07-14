import express from "express";
import  cors from "cors";
import morgan from "morgan";

const app=express()

app.use(express.json());
app.use (express.urlencoded({extended:true}));
app.use(cors());
app.use(morgan("dev"));

// health check 

app.get("/", (req, res)=>{
    res.status(200).json({sucess:true,message:"Todo Api is running"})
})

export default app;