import "dotenv/config"
import express, { urlencoded } from 'express'
import './models/indexModel.js'
import cors from 'cors'
import cookieParser from "cookie-parser";
import { connect } from "./configs/db.js";
import { router } from "./routes/routes.js";
import morgan from 'morgan'
import fs from "fs"


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/uploads", express.static("uploads"));
app.use(cookieParser())
app.use(morgan("dev"))
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))
app.use(router)



await connect.sync({ alter: false });


app.listen(process.env.EXPRESS_PORT,()=>{
    console.log(`Server is listening on port ${process.env.EXPRESS_PORT}`)
})