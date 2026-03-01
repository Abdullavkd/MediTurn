import express from "express";
import { AuthMiddle, AppointmentCont } from "../Composer/composer.js";

const appointmentRouter = express.Router();

appointmentRouter.post('/book/:clinicId', AuthMiddle.verifyToken, AuthMiddle.authorize('Patient'), AppointmentCont.bookAppointment);
appointmentRouter.get('/appointments/:clinicId', AuthMiddle.verifyToken, AuthMiddle.authorize('Doctor', 'Receptionist', 'ClinicAdmin'), AppointmentCont.getAppointmentsByClinicId);
appointmentRouter.get('/appointment/:appointmentId', AuthMiddle.verifyToken, AuthMiddle.authorize('Patient', 'Doctor', 'Receptionist'), AppointmentCont.getAppointmentById);
appointmentRouter.put('/update/:appointmentId', AuthMiddle.verifyToken, AuthMiddle.authorize('Patient'), AppointmentCont.updateAppointmentById);
appointmentRouter.patch('/status/:appointmentId', AuthMiddle.verifyToken, AuthMiddle.authorize('Doctor', 'Receptionist'), AppointmentCont.updateAppointmentStatusById);
appointmentRouter.put('/cancel/:appointmentId', AuthMiddle.verifyToken, AuthMiddle.authorize('Patient'), AppointmentCont.cancelAppointmentById);

export default appointmentRouter;