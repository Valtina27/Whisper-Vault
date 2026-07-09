import express from "express";
import 'dotenv/config'
import  connectDB from "./config/database.js";
import { loginUser } from "./controllers/userControllers.js";
import cors from 'cors';
import { registerUser } from "./controllers/userControllers.js";

let app=express();
let PORT=process.env.PORT


app.use(express.json());
app.use(cors())

app.post('/api/user/login',loginUser);
app.post('/api/user/register',registerUser);


app.listen(PORT,async()=>{
    await connectDB();
    console.log("Server is running...."+PORT)
})