import receptionistModel from "../Model/ReceptionistModel.js";


class ReceptionistRepository {
    async findById(receptionistId) {
        try {
            const receptionist = await receptionistModel.findById(receptionistId).select("-password");
            return receptionist;
        } catch (error) {
             throw error;
        }
    }

    async assignReceptionist(receptionistData) {
        try {
            const newReceptionist = await receptionistModel.create(receptionistData);
            
            const receptionistObj = newReceptionist.toObject();
            delete receptionistObj.password;

            return receptionistObj;
        } catch (error) {
             throw error;
        }
    }


    async deleteReceptionist(receptionistId) {
        try {
            const deletedReceptionist = await receptionistModel.findByIdAndDelete(receptionistId);
            if(!deletedReceptionist) throw new Error("Receptionist Not Found");
            return {success: true, message: "Receptionist Account Deleted Successfully"}
        } catch (error) {
             throw error;
        }
    }


    async getReceptionistsByClinic(clinicId) {
        try {
            const receptionists = await receptionistModel.find({clinicId}).populate('userId', '-password');
            return receptionists;
        } catch (error) {
             throw error;
        }
    }
}

export default ReceptionistRepository;