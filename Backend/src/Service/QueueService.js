import { AppointmentRepo, ClinicRepo, DoctorRepo, ReceptionistRepo } from "../Composer/composer.js";

class QueueService {
    // function to get live queue for a clinic
    async getLiveQueue(clinicId, userId) {
        try {
            const clinic = await ClinicRepo.findById(clinicId);
            if(!clinic) throw new Error("Clinic not found for fetching live queue");

            const liveQueue = await AppointmentRepo.getAppointmentsByClinicId(clinicId);

            const today = new Date().toISOString().split('T')[0];
            const todayQueue = liveQueue.filter(token => token.createdAt.toISOString().split('T')[0] === today);
            if(!todayQueue || todayQueue.length === 0) throw new Error("Live queue not found for this clinic");
            const currentQueue = todayQueue.filter(token => token.status === "Scheduled" || token.status === "In Progress");
            const userTokenIndex = currentQueue.findIndex(token => token.patientId._id.toString() === userId.toString());
            
            const avgWaitingTime = clinic.averageConsultationTime;

            const waitingTime = currentQueue.length > 0 ? userTokenIndex == "-1" ? 0 : userTokenIndex * avgWaitingTime : 0; // Assuming average time per token is 15 minutes
            
        return {currentQueue, waitingTime};
        } catch (error) {
            throw error;
        }
    }

    // function to get queue history for a clinic
    async getQueueHistory(clinicId) {
        try {
            const clinic = await ClinicRepo.findById(clinicId);
            if(!clinic) throw new Error("Clinic not found for fetching live queue");

            const liveQueue = await AppointmentRepo.getAppointmentsByClinicId(clinicId);

            const currentQueue = liveQueue.filter(token => token.status === "Scheduled" || token.status === "In Progress"); 
            if(currentQueue.length === 0) throw new Error("Live queue not found for this clinic"); 
        return currentQueue;
        } catch (error) {
            throw error;
        }
    }

    // function to move to next token in the queue
    async nextToken(clinicId, userId) {
        try {
            const clinic = await ClinicRepo.findById(clinicId);
            if(!clinic) throw new Error("Clinic not found for fetching live queue");

            const doctor = await DoctorRepo.getDoctorById(userId);
            const receptionist = await ReceptionistRepo.getReceptionistByUserId(userId);
            if(!doctor && !receptionist) throw new Error("Unauthorized to move to next token in the queue");

            if(doctor && doctor.clinicId.toString() !== clinicId.toString()) throw new Error("Doctor not authorized to move to next token in this clinic");
            if(receptionist && receptionist.clinicId.toString() !== clinicId.toString()) throw new Error("Receptionist not authorized to move to next token in this clinic");

            const liveQueue = await AppointmentRepo.getAppointmentsByClinicId(clinicId);

            const today = new Date().toISOString().split('T')[0];
            const todayQueue = liveQueue.filter(token => token.createdAt.toISOString().split('T')[0] === today);

            if(!todayQueue || todayQueue.length === 0) throw new Error("Live queue not found for this clinic");
            const currentQueue = todayQueue.filter(token => token.status === "Scheduled" || token.status === "In Progress");
            if(currentQueue.length === 0) throw new Error("No tokens in the live queue to move to next");

            if(currentQueue[0].status === "Scheduled") {
                await AppointmentRepo.updateAppointmentById(currentQueue[0]._id, {status: "In Progress"});
            } else if(currentQueue[0].status === "In Progress") {
                await AppointmentRepo.updateAppointmentById(currentQueue[0]._id, {status: "Completed"});
            }
        return {message: "Token status updated successfully"};
        } catch (error) {
            throw error;
        }
    }
}

export default QueueService;