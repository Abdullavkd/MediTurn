import { DoctorSer } from "../Composer/composer.js";


class DoctorController {

    // function to add new doctor to a clinic
    async addNewDoctor(req, res) {
        try {
            const {userId, specialization, isAvailable, AvgTimePerPatient} = req.body;
            const {clinicId} = req.params;
            console.log(userId, specialization, isAvailable, AvgTimePerPatient, clinicId)
            const newDoctor = await DoctorSer.newDoctor(userId, clinicId, specialization, isAvailable, AvgTimePerPatient);
            res.status(201).json({success: true, data: newDoctor});
        } catch (error) {
            res.status(error.status || 500).json(error.message || "Server Error");
        }
    }


    // function to get list of doctor in a clinic by clinic id
    async doctorsByClinicId(req, res) {
        try {
            const {clinicId} = req.params;
            const doctors = await DoctorSer.doctorByClinicId(clinicId);
            res.status(200).json({success: true, data: doctors});
        } catch (error) {
            res.status(error.status || 500).json(error.message || "Server Error");
        }
    }
}

export default DoctorController;