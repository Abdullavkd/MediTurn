import express from 'express';
import cors from 'cors';
import connectDB from './Config/db.js';
import 'dotenv/config';
import cookieParser from 'cookie-parser'
import authRouter from './Router/authRoutes.js';
import clinicRouter from './Router/ClinicRouter.js';
import morgan from 'morgan'
import doctorRouter from './Router/DoctorRouter.js';
import userRouter from './Router/UserRouter.js';
import appointmentRouter from './Router/AppointmentRouter.js';
import receptionistRouter from './Router/ReceptionistRouter.js';

const app = express();
app.use(cookieParser())
app.use(express.json());
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}));
app.use(morgan('dev'));

connectDB();

// Routes
app.use('/api/auth', authRouter);
app.use('/api/clinic', clinicRouter);
app.use('/api/doctor', doctorRouter);
app.use('/api/user', userRouter);
app.use('/api/appointment', appointmentRouter);
app.use('/api/receptionist', receptionistRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`)
});