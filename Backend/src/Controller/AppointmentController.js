import { AppointmentSer } from "../Composer/composer.js";


class AppointmentController {
    async createAppointment(req, res) {
        try {
            const {patient, clinicId} = req.body;
            const newAppointment = await AppointmentSer.createAppointment(patient, clinicId);
            res.status(201).json({success: true, data: newAppointment})
        } catch (error) {
            res.status(500).json({success: false, message: error.message})
        }
    }

    // function to get appointments by clinic ID
    async getAppointmentsByClinic(req, res) {
        try {
            const {clinicId} = req.params;
            const appointments = await AppointmentSer.getAppointmentsByClinic(clinicId);
            res.status(200).json({success: true, data: appointments})
        } catch (error) {
            res.status(500).json({success: false, message: error.message})
        }
    }

    // function to get appointments by patient ID
    async getAppointmentsByPatient(req, res) {
        try {
            const {patientId} = req.params;
            const appointments = await AppointmentSer.getAppointmentsByPatient(patientId);
            res.status(200).json({success: true, data: appointments})
        } catch (error) {
            res.status(500).json({success: false, message: error.message})
        }
    }

    // function to update appointment status
    async updateAppointmentStatus(req, res) {
        try {
            const {appointmentId} = req.params;
            const {status} = req.body;
            const updatedAppointment = await AppointmentSer.updateAppointmentStatus(appointmentId, status);
            res.status(200).json({success: true, data: updatedAppointment})
        } catch (error) {
            res.status(500).json({success: false, message: error.message})
        }
    }

    // function to delete an appointment
    async deleteAppointment(req, res) {
        try {
            const {appointmentId} = req.params;
            const deletedAppointment = await AppointmentSer.deleteAppointment(appointmentId);
            res.status(200).json({success: true, data: deletedAppointment})
        } catch (error) {
            res.status(500).json({success: false, message: error.message})
        }
    }

    // function to get an appointment by ID
    async getAppointmentById(req, res) {
        try {
            const {appointmentId} = req.params;
            const appointment = await AppointmentSer.getAppointmentById(appointmentId);
            res.status(200).json({success: true, data: appointment})
        } catch (error) {
            res.status(500).json({success: false, message: error.message})
        }
    }

    // function to get all appointments
    async getAllAppointments(req, res) {
        try {
            const appointments = await AppointmentSer.getAllAppointments();
            res.status(200).json({success: true, data: appointments})
        } catch (error) {
            res.status(500).json({success: false, message: error.message})
        }
    }
}

export default AppointmentController;