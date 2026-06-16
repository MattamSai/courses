import {Sequelize} from "sequelize"
// import { configDotenv } from "dotenv"
// configDotenv()

export const connect = new Sequelize(process.env.DATABASE_NAME
    ,process.env.DB_USER_NAME
    ,process.env.DB_PASSWORD
,{
    dialect:'mysql',
    host:process.env.HOST,
    port:process.env.DB_PORT,
    logging: false,
})

try {
    await connect.authenticate()
    console.log("DB connection succesfull")
} catch (error) {
    console.log(error)
    throw new Error(error)
}