import express from 'express';
import { AuthMiddle, ReceptionistCont } from '../Composer/composer.js';

const receptionistRouter = express.Router();

receptionistRouter.post('/add/:clinicId', AuthMiddle.verifyToken, AuthMiddle.authorize("ClinicAdmin"), ReceptionistCont.assignReceptionist);
receptionistRouter.get('/clinic/:clinicId', AuthMiddle.verifyToken, AuthMiddle.authorize("ClinicAdmin"), ReceptionistCont.receptionistsByClinicId);
receptionistRouter.get('/:id', AuthMiddle.verifyToken, AuthMiddle.authorize("Receptionist", "ClinicAdmin"), ReceptionistCont.receptionistById);
receptionistRouter.delete('/:id', AuthMiddle.verifyToken, AuthMiddle.authorize("ClinicAdmin", "Receptionist"), ReceptionistCont.deleteReceptionistById);

export default receptionistRouter;