import express from 'express';
import { AuthMiddle, DoctorCont } from '../Composer/composer.js';

const doctorRouter = express.Router();

doctorRouter.post('/add/doctor/:clinicId', AuthMiddle.verifyToken, AuthMiddle.authorize('Owner'), DoctorCont.addNewDoctor);
doctorRouter.get('/clinic/doctors/:clinicId', DoctorCont.doctorsByClinicId);
doctorRouter.patch('/update/availability/:userId', AuthMiddle.verifyToken, AuthMiddle.authorize('Owner'), DoctorCont.updateIsAvailable);
doctorRouter.get('/getdoctor/:userId', DoctorCont.getDoctorByuserId);
doctorRouter.get('/slotes/:userId', DoctorCont.generateSlotes);

export default doctorRouter;