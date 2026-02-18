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
            return await doctorModel.find({clinicId}).populate('userId');
        } catch (error) {
            throw error;
        }
    }


    async updateAvailability(userId,isAvailable) {
        try {
            if(!userId) throw new Error("User ID and isAvailable are required");
            return await doctorModel.findOneAndUpdate({userId},{isAvailable: isAvailable}, {new: true, runValidators: true});
        } catch (error) {
            throw error;
        }
    }


    async getDoctorById(userId) {
        try {
            if(!userId) throw new Error("User ID is required");
            return await doctorModel.findOne({userId}).populate('userId');
        } catch (error) {
            throw error;
        }
    }
}

export default DoctorRepository;