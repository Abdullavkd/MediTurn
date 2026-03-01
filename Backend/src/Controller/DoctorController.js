import { DoctorSer } from "../Composer/composer.js";


class DoctorController {

    // function to add new doctor to a clinic
    async addNewDoctor(req, res) {
        try {
            const {userId, specialization, isAvailable, breakTime} = req.body;
            const {clinicId} = req.params;
            const adminId = req.user.id;
            
            const breakTimes = breakTime ? breakTime.split(',').map(time => time.trim()) : [];
            
            const newDoctor = await DoctorSer.newDoctor(userId, clinicId, specialization, isAvailable, [...breakTimes], adminId);
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


    // function to update doctor availability by doctor id
    async updateDoctorAvailability(req, res) {
        try {
            const doctorId = req.user.id;
            const {isAvailable} = req.body;
            const updatedDoctor = await DoctorSer.updateDoctorAvailability(doctorId, isAvailable);
            res.status(200).json({success: true, data: updatedDoctor});
        } catch (error) {
            res.status(error.status || 500).json(error.message || "Server Error");
        }
    }


    // function to get doctor by doctor id
    async doctorById(req, res) {
        try {
            const doctorId = req.params.id;
            const doctor = await DoctorSer.doctorById(doctorId);
            res.status(200).json({success: true, data: doctor});
        } catch (error) {
            res.status(error.status || 500).json(error.message || "Server Error");
        }
    }


    // function to delete doctor by doctor id
    async deleteDoctorById(req, res) {
        try {
            const doctorId = req.params.id;
            const userId = req.user.id;
            const result = await DoctorSer.deleteDoctorById(doctorId, userId);
            res.status(200).json(result);
        } catch (error) {
            res.status(error.status || 500).json(error.message || "Server Error");
        }
    }


    // function to update doctor details by doctor id
    async updateDoctorDetails(req, res) {
        try {
            const doctorId = req.params.id;
            const userId = req.user.id;
            const updateData = req.body;
            if(!doctorId) throw new Error("Doctor ID is required");
            if(!updateData) throw new Error("There is no data to update");
            const updatedDoctor = await DoctorSer.updateDoctorDetails(doctorId, userId, updateData);
            res.status(200).json({success: true, data: updatedDoctor});
        } catch (error) {
            res.status(error.status || 500).json({success: false, message: error.message});
        }
    }
}

export default DoctorController;