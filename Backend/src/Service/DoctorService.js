import { ClinicRepo, DoctorRepo, UserRepo } from "../Composer/composer.js";



class DoctorServices {

    // function to assing a doctor to a clinic
    async newDoctor(userId, clinicId, specialization, isAvailable, AvgTimePerPatient) {
        try {
            if(!userId || !clinicId || !specialization || !isAvailable || !AvgTimePerPatient) throw new Error("All Fields are Required");
            const user = await UserRepo.findById(userId);
            if(!user || user.role !== "Doctor") throw new Error("There is no user or he is not a doctor");
            return await DoctorRepo.assignDoctor(userId, clinicId, specialization, isAvailable, AvgTimePerPatient);
        } catch (error) {
            throw error;
        }
    }

    // function to get doctors  of a clinic by clinic id
    async doctorByClinicId(clinicId) {
        try {
            if(!clinicId) throw new Error("Clinic ID is required");
            const clinic = await ClinicRepo.findById(clinicId)
            if(!clinic) throw new Error("No Clinic found");
            const doctors = await DoctorRepo.getDoctorsByClinic(clinicId);
            if(doctors.length < 1) throw new Error("No doctors Listed in the Clinic");
            return doctors;
        } catch (error) {
            throw error;
        }
    }
}

export default DoctorServices;