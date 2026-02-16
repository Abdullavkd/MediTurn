import express from 'express';
import cors from 'cors';
import connectDB from './Config/db.js';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import authRouter from './Router/authRouter.js';

dotenv.config()
const app = express();
app.use(cookieParser())
app.use(express.json());
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}));

connectDB();

// Routes
app.use('/api/auth', authRouter)

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`)
});