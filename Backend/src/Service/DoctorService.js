import { ClinicRepo, DoctorRepo, UserRepo } from "../Composer/composer.js";



class DoctorServices {

    // function to assing a doctor to a clinic
    async newDoctor(userId, clinicId, specialization, isAvailable, breakTime) {
        try {
            if(!userId || !clinicId || !specialization || !isAvailable) throw new Error("All Fields are Required");
            const user = await UserRepo.findById(userId);
            if(!user || user.role !== "Doctor") throw new Error("There is no user or he is not a doctor");
            const doctors = await DoctorRepo.getDoctorsByClinic(clinicId);
            const doctorExist = doctors.find(doctor => doctor.userId._id.toString() === userId);
            if(doctorExist) throw new Error("Doctor already exists in this clinic");
            return await DoctorRepo.assignDoctor(userId, clinicId, specialization, isAvailable, breakTime);
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


    // function to update doctor availability by doctor id
    async updateDoctorAvailability(doctorId, isAvailable) {
        try {
            if(!doctorId || typeof(isAvailable) !== 'boolean') throw new Error("Doctor ID and availability status are required");
            const user = await UserRepo.findById(doctorId);
            if(!user || user.role !== "Doctor") throw new Error("Doctor not found");
            const updatedDoctor = await DoctorRepo.updateDoctorAvailability(doctorId, isAvailable);
            return updatedDoctor;
        } catch (error) {
            throw error;
        }
    }


    // function to find doctor by doctorId
    async doctorById(doctorId) {
        try {
            if(!doctorId) throw new Error("Doctor ID is required");
            const doctor = await DoctorRepo.findById(doctorId);
            if(!doctor) throw new Error("Doctor not found");
            return doctor;
        } catch (error) {
            throw error;
        }
    }


    // function to delete doctor by doctor id
    async deleteDoctorById(doctorId, userId) {
        try {
            if(!doctorId) throw new Error("Doctor ID is required for deleting doctor");
            const doctor = await DoctorRepo.findById(doctorId);
            if(!doctor) throw new Error("Doctor not found to delete");

            const clinics = await ClinicRepo.findByOwner(userId);
            const available = clinics?.find(clinic => clinic._id.toString() === doctor.clinicId.toString());
            
            if(doctor.userId._id.toString() !== userId && clinics.length < 1 || !available) throw new Error("You are not authorized to delete this doctor");
            return await DoctorRepo.deleteById(doctorId);
        } catch (error) {
            throw error;
        }
    }
}

export default DoctorServices;