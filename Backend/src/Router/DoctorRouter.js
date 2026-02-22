import express from 'express';
import { AuthMiddle, DoctorCont } from '../Composer/composer.js';

const doctorRouter = express.Router();

doctorRouter.post('/add/doctor/:clinicId', AuthMiddle.verifyToken, AuthMiddle.authorize('ClinicAdmin'), DoctorCont.addNewDoctor);
doctorRouter.get('/clinic/doctors/:clinicId', DoctorCont.doctorsByClinicId);
doctorRouter.patch('/update/availability', AuthMiddle.verifyToken, AuthMiddle.authorize('Doctor'), DoctorCont.updateDoctorAvailability);
doctorRouter.get('/byid/:id', DoctorCont.doctorById);
doctorRouter.delete('/delete/:id', AuthMiddle.verifyToken, AuthMiddle.authorize('ClinicAdmin', 'Doctor'), DoctorCont.deleteDoctorById);


export default doctorRouter;