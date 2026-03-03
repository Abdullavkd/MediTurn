import { ReportSer } from "../Composer/composer.js";

class ReportController {
    async getDailyReport(req, res) {
        try {
            const {clinicId, date} = req.query;
            const userId = req.user.id;
            if(!clinicId) throw new Error("Clinic ID is required to fetch daily report");
            if(!date) throw new Error("Date is required to fetch daily report");
            const dailyReport = await ReportSer.getDailyReport(clinicId, date, userId);
            res.status(200).json(dailyReport);
        }catch (error) {
            res.status(500).json({error: error.message});
        }
    }

    // async getDoctorsPerformanceReport(req, res) {
    //     try {
    //         const {clinicId, date} = req.query;
    //         const userId = req.user.id;
    //         if(!clinicId) throw new Error("Clinic ID is required to fetch doctors performance report");
    //         if(!date) throw new Error("Date is required to fetch doctors performance report");
    //         const performanceReport = await ReportSer.getDoctorsPerformanceReport(clinicId, date, userId);
    //         res.status(200).json(performanceReport);
    //     }catch (error) {
    //         res.status(500).json({error: error.message});
    //     }
    // }
}

export default ReportController;