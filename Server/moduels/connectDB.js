import mongoose from 'mongoose'
const connectDB=(url)=>{
    return mongoose.connect(url, {
        bufferCommands: false,
        connectTimeoutMS: 30000, // 30 seconds
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
}
export default connectDB;