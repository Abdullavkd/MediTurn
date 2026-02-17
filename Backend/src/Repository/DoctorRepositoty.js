import doctorModel from "../Model/DoctorModel.js";


class DoctorRepository {
    async assignDoctor(userId, clinicId, specialization, isAvailable, AvgTimePerPatient) {
        try {
            if(!userId || !clinicId || !specialization || !isAvailable || !AvgTimePerPatient) throw new Error("All Fields are Required");
            return await doctorModel.create({userId, clinicId, specialization, isAvailable, AvgTimePerPatient});
        } catch (error) {
            console.error(`Repo Error (assignDoctor): ${error.message}`);
            throw error;
        }
    }


    async getDoctorsByClinic(clinicId) {
        try {
            if(!clinicId) throw new Error("Clinic ID is required");
            return await doctorModel.find({clinicId});
        } catch (error) {
            throw error;
        }
    }
}

export default DoctorRepository;