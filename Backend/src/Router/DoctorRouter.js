import express from 'express';
import { AuthMiddle, DoctorCont } from '../Composer/composer.js';

const doctorRouter = express.Router();

doctorRouter.post('/add/doctor/:clinicId', AuthMiddle.verifyToken, AuthMiddle.authorize('admin'), DoctorCont.addNewDoctor);
doctorRouter.get('/clinic/doctors/:clinicId', DoctorCont.doctorsByClinicId);

export default doctorRouter;