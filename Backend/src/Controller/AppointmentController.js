import { AppointmentSer } from "../Composer/composer.js";


class AppointmentController {
    // Book an Appointment
    async bookAppointment(req, res) {
        try {
            const {name, phone} = req.body;
            const clinicId = req.params.clinicId;
            if(!name || !phone || !clinicId) throw new Error("Missing required fields: name, phone, and clinic ID");
            const userId = req.user.id;
            const bookedAppointment = await AppointmentSer.bookAppointment(userId, clinicId, name, phone);
            res.status(201).json({
                success: true,
                message: "Appointment booked successfully",
                data: bookedAppointment
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }


    // get all appointment by clinic id
    async getAppointmentsByClinicId(req, res) {
        try {
            const clinicId = req.params.clinicId;
            const userId = req.user.id;

            if(!clinicId) throw new Error("Clinic ID is required");
            const appointments = await AppointmentSer.getAppointmentsByClinicId(clinicId, userId);
            res.status(200).json({
                success: true,
                data: appointments
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }


    // get appointment details by appointment id
    async getAppointmentById(req, res) {
        try {
            const appointmentId = req.params.appointmentId;
            if(!appointmentId) throw new Error("Appointment ID is required");
            const userId = req.user.id;
            const appointment = await AppointmentSer.getAppointmentById(appointmentId, userId);
            res.status(200).json({
                success: true,
                data: appointment
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }


    // function to update appointment details by appointment id
    async updateAppointmentById(req, res) {
        try {
            const appointmentId = req.params.appointmentId;
            const updateData = req.body;
            if(!appointmentId || !updateData) throw new Error("Appointment ID and update data are required for updating appointment");
            const userId = req.user.id;
            const updatedAppointment = await AppointmentSer.updateAppointmentById(appointmentId, updateData, userId);
            res.status(200).json({
                success: true,
                message: "Appointment updated successfully",
                data: updatedAppointment
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }


    // function to update status of appointment by appointment id
    async updateAppointmentStatusById(req, res) {
        try {
            const appointmentId = req.params.appointmentId;
            const {status} = req.body;
            if(!appointmentId || !status) throw new Error("Appointment ID and status are required for updating appointment status");
            const userId = req.user.id;
            const updatedAppointment = await AppointmentSer.updateAppointmentStatus(appointmentId, status, userId);
            res.status(200).json({
                success: true,
                message: "Appointment status updated successfully",
                data: updatedAppointment
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }


    // function to cancel appointment by appointment id
    async cancelAppointmentById(req, res) {
        try {
            const appointmentId = req.params.appointmentId;
            if(!appointmentId) throw new Error("Appointment ID is required for cancelling appointment");
            const userId = req.user.id;
            const updatedAppointment = await AppointmentSer.cancelAppointmentByPatient(appointmentId, userId);
            res.status(200).json({
                success: true,
                message: "Appointment cancelled by patient successfully",
                data: updatedAppointment
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }
}

export default AppointmentController;