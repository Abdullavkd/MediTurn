import doctorModel from "../Model/DoctorModel.js";


class DoctorRepository {
    async assignDoctor(userId, clinicId, specialization, isAvailable, breakTime) {
        try {
            if(!userId || !clinicId || !specialization || !isAvailable) throw new Error("All Fields are Required");
            return await doctorModel.create({userId, clinicId, specialization, isAvailable, breakTime});
        } catch (error) {
            console.error(`Repo Error (assignDoctor): ${error.message}`);
            throw error;
        }
    }


    async getDoctorsByClinic(clinicId) {
        try {
            if(!clinicId) throw new Error("Clinic ID is required");
            return await doctorModel.find({clinicId}).populate('userId', '-password')
        } catch (error) {
            throw error;
        }
    }

    
    // function to update doctor availability by doctor id
    async updateDoctorAvailability(doctorId, isAvailable) {
        try {
            if(!doctorId || typeof isAvailable !== 'boolean') throw new Error("Doctor ID and availability status are required");
            const updatedDoctor = await doctorModel.findOneAndUpdate(
                {userId: doctorId},
                {$set: {isAvailable}},
                {new: true, runValidators: true}
            ).populate('userId', '-password');
            if(!updatedDoctor) throw new Error("Doctor not found to update");
            return updatedDoctor;
        } catch (error) {
            throw error;
        }
    }


    // function to find doctor by id
    async findById(id) {
        try {
            if(!id) throw new Error("Doctor ID is required");
            return await doctorModel.findById(id).populate('userId', '-password');
        } catch (error) {
            console.error(`Repo Error (findById): ${error.message}`);
            throw error;
        }
    }


    // function to delete doctor by doctor id
    async deleteById(doctorId) {
        try {
            if(!doctorId) throw new Error("Doctor ID is required for deleting doctor");
            const deletedDoctor = await doctorModel.findByIdAndDelete(doctorId);
            if(!deletedDoctor) throw new Error("Doctor not found to delete");
            return {success: true, message: "Doctor Deleted Successfully"};
        } catch (error) {
            throw error;
        }
    }

    // function to update doctor details by doctor id
    async updateDoctorDetails(doctorId, updateData) {
        try {
            const updatedDoctor = await doctorModel.findByIdAndUpdate(
                doctorId,
                {$set: updateData},
                {new: true, runValidators: true}
            ).populate('userId', '-password');
            return updatedDoctor;
        } catch (error) {
            throw error;
        }
    }
}
export default DoctorRepository;