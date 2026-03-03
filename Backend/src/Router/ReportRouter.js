import express from 'express';
import { AuthMiddle, ReportCont } from '../Composer/composer.js';

const reportRouter = express.Router();

// Define report routes here
reportRouter.get('/daily', AuthMiddle.verifyToken, AuthMiddle.authorize('ClinicAdmin'), ReportCont.getDailyReport);
// reportRouter.get('/doctors-performance', AuthMiddle.verifyToken, AuthMiddle.authorize('ClinicAdmin'), ReportCont.getDoctorsPerformanceReport);

export default reportRouter;