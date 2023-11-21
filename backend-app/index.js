import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
const app = express()
dotenv.config()

const connect = async (retries = 10) => {
    if(!retries){
        console.log(`Could not connect to the Database`);
        return;
    }
    console.log(`Trying to connect to the DB - Try number ${11 - retries}`)
    try {
        await mongoose.connect(process.env.MONGODB_SERVER)
        console.log(`Successfully connected to the Database - ${process.env.DB_URI}`)
    } catch (error) {
        console.log(error);
        setTimeout(async () => await connect(retries-1), 5000);
    }
}

const port = process.env.PORT || 3000

app.get('/', (_,res) => {
    res.status(200).send("Welcome!")
})

app.listen(port, async () => {
    console.log(`Server is listening on port ${port}`)
    //await connect();
})