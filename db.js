import mongoose from 'mongoose'

const DORCAS_DB = 'mongodb://127.0.0.1:27017/'


export const connectDB = async ()=>{
    try {
        const conn = mongoose.connect(DORCAS_DB)
        console.log(`connected `)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}