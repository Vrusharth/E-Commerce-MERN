import mongoose from 'mongoose';
// require('dotenv').config();
import dotenv from 'dotenv';
dotenv.config();

export const connectdb = async()=>{
    try{
        const conn = await mongoose.connect(process.env.mongo_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    }catch(error){
        console.error(`Error: ${error.message}`)
        process.exit(1) // process 1 code means a failure
    }
}