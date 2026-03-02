import express from 'express';
import { AuthMiddle, QueueCont } from '../Composer/composer.js';

const queueRouter = express.Router();

queueRouter.get('/live/:clinicId', AuthMiddle.verifyToken, QueueCont.getLiveQueue);
queueRouter.get('/history/:clinicId', AuthMiddle.verifyToken, AuthMiddle.authorize("ClinicAdmin"), QueueCont.getQueueHistory);
queueRouter.post('/next/:clinicId', AuthMiddle.verifyToken, AuthMiddle.authorize('Doctor', 'Receptionist'), QueueCont.nextToken);

export default queueRouter;