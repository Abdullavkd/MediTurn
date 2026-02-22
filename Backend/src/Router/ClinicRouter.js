import express from 'express';
import { AuthMiddle, ClinicCont } from '../Composer/composer.js';

const clinicRouter = express.Router()

clinicRouter.post('/create', AuthMiddle.verifyToken, ClinicCont.addClinic);
clinicRouter.get('/allclinic', AuthMiddle.verifyToken, ClinicCont.allClinics);
clinicRouter.get('/byid/:id', AuthMiddle.verifyToken, ClinicCont.findClinicById);
clinicRouter.get('/byowner/:id', AuthMiddle.verifyToken, AuthMiddle.authorize('SuperAdmin'), ClinicCont.findClinicByOwner);

export default clinicRouter;