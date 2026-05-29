import "dotenv/config"
import express, { urlencoded } from 'express'
import './models/indexModel.js'
import cors from 'cors'
import cookieParser from "cookie-parser";
import { connect } from "./configs/db.js";
import { router } from "./routes/routes.js";
import morgan from 'morgan'


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(morgan("dev"))
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))
app.use(router)


app.listen(process.env.EXPRESS_PORT,()=>{
    console.log(`Server is listening on port ${process.env.EXPRESS_PORT}`)
})