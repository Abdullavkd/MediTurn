import { ClinicSer } from "../Composer/composer.js";


class ClinicController {
    // function to add new clinic
    async addClinic(req, res) {
        try {
            const {name, place, start, end, averageConsultationTime, status} = req.body;
            const ownerId = req.user.id;

            const newClinic = await ClinicSer.clinicCreate(name, place, start, end, ownerId, averageConsultationTime, status);
            res.status(201).json({success: true, data: newClinic})
        } catch (error) {
            res.status(error.status || 500).json(error.message || "Server Error");
        }
    }


    // function to get all clinics list
    async allClinics(req, res) {
        try {
            const allClinics = await ClinicSer.allClinics();
            res.status(200).json({success: true, data: allClinics})
        } catch (error) {
            res.status(error.status).json(error.message);
        }
    }


    // function to find clinic by id
    async findClinicById(req, res) {
        try {
            const clinicId = req.params.id;
            
            const clinic = await ClinicSer.findClinicById(clinicId);

            res.status(200).json({success: true, data: clinic})
        } catch (error) {
            res.status(error.status || 500).json(error.message || "Server Error");
        }
    }


    // function to find Clinic By owner
    async findClinicByOwner(req, res) {
        try {
            const ownerId = req.params.id;
            const clinic = await ClinicSer.findClinicByOwner(ownerId);
            res.status(200).json({success: true, data: clinic})
        } catch (error) {
            res.status(error.status || 500).json(error.message || "Server Error");
        }
    }
}

export default ClinicController;