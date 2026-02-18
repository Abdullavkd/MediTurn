import AppointmentModel from "../Model/AppointmentModel.js";


class AppointmentRepository {
    // function to create a new appointment
    async createAppointment(patientId, clinicId, tokenNumber) {
        try {
            if(!patientId || !clinicId || !tokenNumber) throw new Error("Patient ID, Clinic ID and Token Number are required");
            const appointment = await AppointmentModel.create({patientId, clinicId, tokenNumber});
            return appointment;
        } catch (error) {
            console.error(`Repo Error (createAppointment): ${error.message}`);
            throw error;
        }
    }

    // function to get appointments by clinic ID
    async getAppointmentsByClinic(clinicId) {
        try {
            if(!clinicId) throw new Error("Clinic ID is required");
            return await AppointmentModel.find({clinicId}).populate('patientId').populate('clinicId');
        } catch (error) {
            console.error(`Repo Error (getAppointmentsByClinic): ${error.message}`);
            throw error;
        }
    }

    // function to get appointments by patient ID
    async getAppointmentsByPatient(patientId) {
        try {
            if(!patientId) throw new Error("Patient ID is required");
            return await AppointmentModel.find({patientId}).populate('patientId').populate('clinicId');
        } catch (error) {
            console.error(`Repo Error (getAppointmentsByPatient): ${error.message}`);
            throw error;
        }
    }

    // function to update appointment status
    async updateAppointmentStatus(appointmentId, status) {
        try {
            if(!appointmentId || !status) throw new Error("Appointment ID and Status are required");
            return await AppointmentModel.findByIdAndUpdate(appointmentId, {status}, {new: true, runValidators: true}).populate('patientId').populate('clinicId');
        } catch (error) {
            console.error(`Repo Error (updateAppointmentStatus): ${error.message}`);
            throw error;
        }
    }

    // function to delete an appointment
    async deleteAppointment(appointmentId) {
        try {
            if(!appointmentId) throw new Error("Appointment ID is required");
            return await AppointmentModel.findByIdAndDelete(appointmentId);
        } catch (error) {
            console.error(`Repo Error (deleteAppointment): ${error.message}`);
            throw error;
        }
    }


    // function to get an appointment by ID
    async getAppointmentById(appointmentId) {
        try {
            if(!appointmentId) throw new Error("Appointment ID is required");
            return await AppointmentModel.findById(appointmentId).populate('patientId').populate('clinicId');
        } catch (error) {
            console.error(`Repo Error (getAppointmentById): ${error.message}`);
            throw error;
        }
    }  

    // function to get all appointments
    async getAllAppointments() {
        try {
            return await AppointmentModel.find({}).populate('patientId').populate('clinicId');
        } catch (error) {
            console.error(`Repo Error (getAllAppointments): ${error.message}`);
            throw error;
        }
    }
}

export default AppointmentRepository;