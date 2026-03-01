import { ClinicRepo, ReceptionistRepo, UserRepo } from "../Composer/composer.js";


class ReceptionistService {
    // function to add a new receptionist to the clinic
    async newReceptionist(userId, clinicId, ownerId) {
        try {
            if(!userId || !clinicId || !ownerId) throw new Error("All Fields are Required");
            const user = await UserRepo.findById(userId);
            
            if(!user || user.role !== "Receptionist") throw new Error("There is no user or he is not a receptionist");
            const receptionists = await ReceptionistRepo.getReceptionistsByClinic(clinicId);
            
            const receptionistExist = receptionists.filter(receptionist => receptionist.userId._id.toString() === userId);
            if(receptionistExist.length > 0) throw new Error("Receptionist already exists in this clinic");
            
            const clinic = await ClinicRepo.findById(clinicId);
            if(!clinic) throw new Error("No Clinic found with the provided clinic ID");
            
            if(clinic.ownerId.toString() !== ownerId) throw new Error("You are not authorized to assign receptionist to this clinic");
            
            return await ReceptionistRepo.assignReceptionist({userId, clinicId});
        } catch (error) {
            throw error;
        }
    }



    
    // function to get receptionists  of a clinic by clinic id
    async rececptionistById(clinicId, userId) {
        try {
            const clinic = await ClinicRepo.findById(clinicId)
            if(!clinic) throw new Error("No Clinic found");
            
            const receptionists = await ReceptionistRepo.getReceptionistsByClinic(clinicId);
            const clinicOwner = clinic.ownerId.toString() === userId;
            if(!clinicOwner) throw new Error("You are not authorized to view the receptionists of this clinic");
            
            if(receptionists.length < 1) throw new Error("No receptionists Listed in the Clinic");
            return receptionists;
        } catch (error) {
            throw error;
        }
    }


    // function to find receptionist by receptionistId
    async receptionistById(receptionistId, userId) {
        try {
            const receptionist = await ReceptionistRepo.findById(receptionistId);
            if(!receptionist) throw new Error("Receptionist not found");

            const user = receptionist.userId._id.toString() === userId;
            const clinics = await ClinicRepo.findByOwner(userId);
            const available = clinics.filter(clinic => clinic._id.toString() === receptionist.clinicId.toString());
            
            if(!user && (clinics.length < 1 || available.length < 1)) throw new Error("You are not authorized to view this receptionist details");
            return receptionist;
        } catch (error) {
            throw error;
        }
    }


    // function to delete receptionist by receptionist id
    async deleteReceptionistById(receptionistId, userId) {
        try {
            const receptionist = await ReceptionistRepo.findById(receptionistId);
            if(!receptionist) throw new Error("Receptionist not found to delete");

            const clinics = await ClinicRepo.findByOwner(userId);
            const available = clinics.filter(clinic => clinic._id.toString() === receptionist.clinicId.toString());
            
            
            if(receptionist.userId._id.toString() !== userId && (clinics.length < 1 || available.length < 1)) throw new Error("You are not authorized to delete this receptionist");
            return await ReceptionistRepo.deleteReceptionist(receptionistId);
        } catch (error) {
            throw error;
        }
    }
}

export default ReceptionistService;