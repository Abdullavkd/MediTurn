import mongoose from "mongoose";
import AppointmentModel from "../Model/AppointmentModel.js";

class ReportRepository {
    async getDailyReport(clinicId, date) {
        try {
            const startOfDay = new Date(date);
            startOfDay.setHours(0, 0, 0, 0);

            const endOfDay = new Date(date);
            endOfDay.setHours(23, 59, 59, 999);

            return await AppointmentModel.aggregate([
                {
                    $match: {
                        clinicId: new mongoose.Types.ObjectId(clinicId),
                        createdAt: { $gte: startOfDay, $lte: endOfDay }
                    }},
                {
                    $group: {
                        _id: "$status",
                        count: { $sum: 1 }
                    }}
            ]);
        } catch (error) {
            throw error;
        }
    }


    // async getDoctorsPerformanceReport(clinicId, date) {
    //     try {
    //         const startOfDay = new Date(date);
    //         startOfDay.setHours(0, 0, 0, 0);

    //         const endOfDay = new Date(date);
    //         endOfDay.setHours(23, 59, 59, 999);

    //         return await AppointmentModel.aggregate([
    //             {
    //                 $match: {
    //                     clinicId: new mongoose.Types.ObjectId(clinicId),
    //                     createdAt: { $gte: startOfDay, $lte: endOfDay },
    //                     status: "Completed"
    //                 }},
    //             {
    //                 $group: {
    //                     _id: "$doctorId",
    //                     totalPatients: { $sum: 1 }
    //                 }},
    //             {
    //                 $lookup: {
    //                     from: "doctors",
    //                     localField: "_id",
    //                     foreignField: "_id",
    //                     as: "doctorInfo"
    //                 }},
    //         ]);
    //     }catch (error) {
    //         throw error;
    //     }
    // }
}

export default ReportRepository;