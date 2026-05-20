import { connect } from "./configs/db.js";
import { configDotenv } from "dotenv";
import express, { urlencoded } from 'express'
import './models/indexModel.js'
import cors from 'cors'
import { router } from "./routes/authRoutes.js";

configDotenv()


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(router)


app.listen(process.env.EXPRESS_PORT,()=>{
    console.log(`Server is listening on port ${process.env.EXPRESS_PORT}`)
})