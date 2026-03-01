import ClinicModel from "../Model/ClinicModel.js";


class ClinicRepository {
    async create(name, place, start, end, ownerId, averageConsultationTime, status) {
        try {
            if(!name || !place || !ownerId || !start || !end || !status) throw new Error("name, place, ownerId, time and status are required");
            return await ClinicModel.create({name, place, ownerId, workingHours:{start, end}, averageConsultationTime, status});
        } catch (error) {
            throw error;
        }
    }


    async findAll() {
        try {
            return await ClinicModel.find({});
        } catch (error) {
            throw error;
        }
    }


    async findById(id) {
        try {
            if(!id) throw new Error("Clinic ID is required");
            return await ClinicModel.findById(id);
        } catch (error) {
            throw error;
        }
    }



    async findByOwner(ownerId) {
        try {
            if(!ownerId) throw new Error("Owner ID is Required");
            return await ClinicModel.find({ownerId});
        } catch (error) {
            throw error;
        }
    }


    async update(clinicId, updateData) {
        try {
            const updatedClinic = await ClinicModel.findByIdAndUpdate(
                clinicId,
                {$set: updateData},
                {new: true, runValidators: true}
            );
            return updatedClinic;
        } catch (error) {             throw error;
        }
    }


    async delete(clinicId) {
        try {
            const deletedClinic = await ClinicModel.findByIdAndDelete(clinicId);
            return {success: true, message: "Clinic Deleted Successfully"}
        } catch (error) {
             throw error;
        }
    }
}

export default ClinicRepository;