import DoctorModel from "../Model/DoctorModel.js";


class DoctorRepository {
    async assignDoctor(userId, clinicId, specialization, isAvailable, AvgTimePerPatient) {
        try {
            if(!userId || !clinicId || !specialization || !isAvailable || !AvgTimePerPatient) throw new Error("All Fields are Required");
            return await DoctorModel.create(userId, clinicId, specialization, isAvailable, AvgTimePerPatient);
        } catch (error) {
            console.error(`Repo Error (assignDoctor): ${error.message}`);
            throw error;
        }
    }


    async getDoctorsByClinic(clinicId) {
        try {
            if(!clinicId) throw new Error("Clinic ID is required");
            return await DoctorModel.find({clinicId});
        } catch (error) {
            throw error;
        }
    }
}

export default DoctorRepository;