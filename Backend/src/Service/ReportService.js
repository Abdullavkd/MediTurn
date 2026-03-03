import { ClinicRepo, ReportRepo } from "../Composer/composer.js";

class ReportService {
    // function to generate daily report for a clinic
    async getDailyReport(clinicId, date, userId) {
        try {
           const clinic = await ClinicRepo.findById(clinicId);
           if(!clinic) throw new Error("Clinic not found for generating daily report");

           if(clinic.ownerId.toString() !== userId.toString()) throw new Error("Unauthorized to generate report for this clinic");

           const reportData = await ReportRepo.getDailyReport(clinicId, date);
           if(!reportData) throw new Error("No data found for generating daily report");
           return reportData;
        } catch (error) {
            throw error;
        }
    }


    // // function to generate doctors performance report for a clinic
    // async getDoctorsPerformanceReport(clinicId, date, userId) {
    //     try {
    //         const clinic = await ClinicRepo.findById(clinicId);
    //         if(!clinic) throw new Error("Clinic not found for generating doctors performance report");

    //         if(clinic.ownerId.toString() !== userId.toString()) throw new Error("Unauthorized to generate report for this clinic");

    //         const reportData = await ReportRepo.getDoctorsPerformanceReport(clinicId, date);
    //         if(!reportData) throw new Error("No data found for generating doctors performance report");
    //         return reportData;
    //     } catch (error) {
    //         throw error;
    //     }
    // }
}

export default ReportService; 