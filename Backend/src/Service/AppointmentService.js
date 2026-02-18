import { AppointmentRepo } from "../Composer/composer.js";


class AppointmentService {
    async createAppointment(appointmentData) {
        try {
            const {clinicId, patientId, appointmentTime} = appointmentData;
            if(!clinicId || !patientId || !appointmentTime) throw new Error("Clinic ID, Patient ID and Appointment Time are required");
            const appointment = await AppointmentRepo.createAppointment(clinicId, patientId, appointmentTime);
            return appointment;
        } catch (error) {
            console.error(`Service Error (createAppointment): ${error.message}`);
            throw error;
        }
    }

    // function to get appointments by clinic ID
    async getAppointmentsByClinic(clinicId) {
        try {
            if(!clinicId) throw new Error("Clinic ID is required");
            const appointments = await AppointmentRepo.getAppointmentsByClinic(clinicId);
            return appointments;
        } catch (error) {
            console.error(`Service Error (getAppointmentsByClinic): ${error.message}`);
            throw error;
        }
    }

    // function to get appointments by patient ID
    async getAppointmentsByPatient(patientId) {
        try {
            if(!patientId) throw new Error("Patient ID is required");
            const appointments = await AppointmentRepo.getAppointmentsByPatient(patientId);
            return appointments;
        } catch (error) {
            console.error(`Service Error (getAppointmentsByPatient): ${error.message}`);
            throw error;
        }
    }

    // function to update appointment status
    async updateAppointmentStatus(appointmentId, status) {
        try {
            if(!appointmentId || !status) throw new Error("Appointment ID and Status are required");
            const updatedAppointment = await AppointmentRepo.updateAppointmentStatus(appointmentId, status);
            return updatedAppointment;
        } catch (error) {
            console.error(`Service Error (updateAppointmentStatus): ${error.message}`);
            throw error;
        }
    }

    // function to delete an appointment
    async deleteAppointment(appointmentId) {
        try {
            if(!appointmentId) throw new Error("Appointment ID is required");
            const deletedAppointment = await AppointmentRepo.deleteAppointment(appointmentId);
            return deletedAppointment;
        } catch (error) {
            console.error(`Service Error (deleteAppointment): ${error.message}`);
            throw error;
        }
    }

    // function to get an appointment by ID
    async getAppointmentById(appointmentId) {
        try {
            if(!appointmentId) throw new Error("Appointment ID is required");
            const appointment = await AppointmentRepo.getAppointmentById(appointmentId);
            return appointment;
        } catch (error) {
            console.error(`Service Error (getAppointmentById): ${error.message}`);
            throw error;
        }
    }

    // function to get all appointments
    async getAllAppointments() {
        try {
            const appointments = await AppointmentRepo.getAllAppointments();
            return appointments;
        } catch (error) {
            console.error(`Service Error (getAllAppointments): ${error.message}`);
            throw error;
        }
    }
}

export default AppointmentService;
