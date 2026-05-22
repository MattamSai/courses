import "dotenv/config"
import express, { urlencoded } from 'express'
import './models/indexModel.js'
import cors from 'cors'
import { router } from "./routes/authRoutes.js";
import cookieParser from "cookie-parser";
import { connect } from "./configs/db.js";



const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))
app.use(router)


app.listen(process.env.EXPRESS_PORT,()=>{
    console.log(`Server is listening on port ${process.env.EXPRESS_PORT}`)
})