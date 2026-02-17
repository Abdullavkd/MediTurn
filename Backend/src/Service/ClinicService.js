import { ClinicRepo } from "../Composer/composer.js";


class ClinicService {
    async clinicCreate(name, place, start, end, ownerId, averageConsultationTime, status) {
        try {
            console.log(name, place, ownerId, status)
            if(!name || !place || !ownerId || !start || !end || !status) throw new Error("name, place, ownerId, time and status are required");
            return await ClinicRepo.create(name, place, start, end, ownerId, averageConsultationTime, status);
            
        } catch (error) {
            throw error;
        }
    }


    async allClinics() {
        try {
            const allClinicsList = await ClinicRepo.findAll();
            if(allClinicsList.length < 1) throw new Error("No Clinics are Listed");

            return allClinicsList;
        } catch (error) {
            throw error;
        }
    }


    async findClinicById (id) {
        try {
            if(!id) throw new Error("Clinic ID is required");
            const clinic = await ClinicRepo.findById(id);

            if(!clinic) throw new Error("No Clinic Found");
            return clinic;
        } catch (error) {
            throw error;
        }
    }


    async findClinicByOwner(ownerId) {
        try {
            if(!ownerId) throw new Error("OwnerId is required");
            const clinics = await ClinicRepo.findByOwner(ownerId);

            if(clinics.length < 1) throw new Error("No Clinic Listed By the provided User");
            
            return clinics;
        } catch (error) {
            throw error;
        }
    }
}

export default ClinicService;