import express from 'express';
import { AuthMiddle, ClinicCont } from '../Composer/composer.js';

const clinicRouter = express.Router()

clinicRouter.post('/create', AuthMiddle.verifyToken, AuthMiddle.authorize('ClinicAdmin'), ClinicCont.addClinic);
clinicRouter.get('/allclinic', ClinicCont.allClinics);
clinicRouter.get('/byid/:id', AuthMiddle.verifyToken, ClinicCont.findClinicById);
clinicRouter.get('/byowner/:id', AuthMiddle.verifyToken, AuthMiddle.authorize('SuperAdmin'), ClinicCont.findClinicByOwner);
clinicRouter.put('/update/:id', AuthMiddle.verifyToken, AuthMiddle.authorize('ClinicAdmin'), ClinicCont.updateClinic);
clinicRouter.delete('/delete/:id', AuthMiddle.verifyToken, AuthMiddle.authorize('ClinicAdmin'), ClinicCont.deleteClinic);

export default clinicRouter;