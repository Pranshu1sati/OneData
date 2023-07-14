import cors from 'cors'
import express from 'express'
import bp from 'body-parser'
import consola from 'consola'
import mongoose from 'mongoose'
import router from './routes/Users.js'
import eventRouter from './routes/Events.js'
import paperRouter from './routes/PaperRoutes.js'
import { DB, PORT } from "./config/index.js"
import connectDB from './moduels/connectDB.js'
const app = express();
app.use(express.json())
//Operational Routes
app.use('/api/v1/auth/',router)
app.use('/api/v1/events/',eventRouter)
app.use('/api/v1/research/',paperRouter)
// connect db
mongoose.connect(DB,  {
    bufferCommands: false,
    connectTimeoutMS: 30000, // 30 seconds
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  const start= async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        consola.success({message:"Connection done", badge : true } );
        app.listen(PORT,()=>{
            consola.success({message:`Server is listening at port ${PORT}`, badge : true})
        })
    }
    catch(err){
        consola.error({message:err, badge: true});
        start()
    }
};
start()