import mongoose from 'mongoose';

export const connectdb = async()=>{
    try{
        const conn = await mongoose.connect(process.env.Mongo_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    }catch(error){
        console.error(`Error: ${error.message}`)
        process.exit(1) // process 1 code means a failure
    }
}