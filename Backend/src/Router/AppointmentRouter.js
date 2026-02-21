import express from "express";
import { AuthMiddle, AppointmentCont } from "../Composer/composer.js";

const appointmentRouter = express.Router();

appointmentRouter.post('/book', AuthMiddle.verifyToken, AuthMiddle.authorize('Patient'), AppointmentCont.bookAppointment);
appointmentRouter.get('/allappointments', AuthMiddle.verifyToken, AuthMiddle.authorize('Owner'), AppointmentCont.getAllAppointments);
appointmentRouter.patch('/update/status/:appointmentId', AuthMiddle.verifyToken, AuthMiddle.authorize('Doctor'), AppointmentCont.updateAppointmentStatus);
appointmentRouter.delete('/delete/:appointmentId', AuthMiddle.verifyToken, AuthMiddle.authorize('Patient'), AppointmentCont.deleteAppointment);
appointmentRouter.get('/clinic/:clinicId', AuthMiddle.verifyToken, AppointmentCont.getAppointmentsByClinic);
appointmentRouter.get('/patient/:patientId', AuthMiddle.verifyToken, AppointmentCont.getAppointmentsByPatient);
appointmentRouter.get('/:appointmentId', AuthMiddle.verifyToken, AppointmentCont.getAppointmentById);

export default appointmentRouter;