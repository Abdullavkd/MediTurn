import { ReceptionistSer } from "../Composer/composer.js";



class ReceptionistController {
    // function to assign receptionist to a clinic
    async assignReceptionist(req, res) {
        try {
            const {userId} = req.body;
            const clinicId = req.params.clinicId;
            const ownerId = req.user.id;
            const receptionist = await ReceptionistSer.newReceptionist(userId, clinicId, ownerId);
            res.status(201).json({success: true, data: receptionist});
        } catch (error) {
            res.status(error.status || 500).json({success: false, message: error.message || "Server Error"});
        }
    }


    // function to get receptionists of a clinic by clinic id
    async receptionistsByClinicId(req, res) {
        try {
            const {clinicId} = req.params;
            const userId = req.user.id;
            if(!clinicId) throw new Error("Clinic ID is required");
            const receptionists = await ReceptionistSer.rececptionistById(clinicId, userId);
            res.status(200).json({success: true, data: receptionists});
        } catch (error) {
            res.status(error.status || 500).json({success: false, message: error.message || "Server Error"});
        }
    }


    // function to find receptionist by receptionist id
    async receptionistById(req, res) {
        try {
            const receptionistId = req.params.id;
            const userId = req.user.id;
            const receptionist = await ReceptionistSer.receptionistById(receptionistId, userId);
            res.status(200).json({success: true, data: receptionist});
        } catch (error) {
            res.status(error.status || 500).json({success: false, message: error.message || "Server Error"});
        }
    }


    // function to delete receptionist by receptionist id
    async deleteReceptionistById(req, res) {
        try {
            const receptionistId = req.params.id;
            const userId = req.user.id;
            const result = await ReceptionistSer.deleteReceptionistById(receptionistId, userId);
            res.status(200).json(result);
        } catch (error) {
            res.status(error.status || 500).json({success: false, message: error.message || "Server Error"});
        }
    }
}

export default ReceptionistController;