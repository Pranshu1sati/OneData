import dotenv from 'dotenv';
dotenv.config();

const DB = process.env.MONGO_URI;
const PORT = process.env.PORT;
const SECRET = process.env.JWT_SECRET;

export { DB, PORT, SECRET };