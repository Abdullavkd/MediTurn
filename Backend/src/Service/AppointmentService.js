import { AppointmentRepo, ClinicRepo, DoctorRepo, ReceptionistRepo, UserRepo } from "../Composer/composer.js";



class AppointmentService {
    // function to book an appointment
    async bookAppointment(userId, clinicId, name, phone) {
        try {
            const clinic = await ClinicRepo.findById(clinicId);
            if(!clinic) throw new Error("Clinic not found for booking appointment");
            const bookedAppointment = await AppointmentRepo.bookAppointment(userId, clinicId, name, phone);
            return bookedAppointment;
        }catch (error) {
            throw error;
        }
    }


    // get all appointment by clinic id
    async getAppointmentsByClinicId(clinicId, userId) {
        try {
            const clinic = await ClinicRepo.findById(clinicId);
            if(!clinic) throw new Error("Clinic not found for fetching appointments");

            const receptionist = await ReceptionistRepo.getReceptionistById(userId);
            const doctor = await DoctorRepo.getDoctorById(userId);
            const user = await UserRepo.findById(userId);
            const clinicAdmin = user && user.role === "clinicAdmin" ? user : null;

            if(!receptionist && !doctor && !clinicAdmin) throw new Error("Receptionist, Doctor or Clinic Admin not found for fetching appointments");
            
            if(receptionist && receptionist.clinicId.toString() !== clinicId) throw new Error("Receptionist does not belong to this clinic");
            if(doctor && doctor.clinicId.toString() !== clinicId) throw new Error("Doctor does not belong to this clinic");
            if(clinicAdmin && userId.toString() !== clinic.userId.toString()) throw new Error("Clinic Admin does not belong to this clinic");
            
            const appointments = await AppointmentRepo.getAppointmentsByClinicId(clinicId);
            return appointments;
        }catch (error) {
            throw error;
        }
    }


    // get appointment details by appointment id
    async getAppointmentById(appointmentId, userId) {
        try {
            const appointment = await AppointmentRepo.getAppointmentById(appointmentId);
            if(!appointment) throw new Error("Appointment not found");

            const receptionist = await ReceptionistRepo.getReceptionistById(userId);
            const doctor = await DoctorRepo.getDoctorById(userId);
            const patient = appointment.patientId.toString() === userId.toString() ? true : false;

            if(!receptionist && !doctor && !patient) throw new Error("Receptionist, Doctor or Patient not found for fetching appointment details");

            if(receptionist && receptionist.clinicId.toString() !== appointment.clinicId.toString()) throw new Error("Receptionist does not belong to this clinic");
            if(doctor && doctor.clinicId.toString() !== appointment.clinicId.toString()) throw new Error("Doctor does not belong to this clinic");

            return appointment;
        }catch (error) {
            throw error;
        }
    }


    // function to update appointment details by appointment id
    async updateAppointmentById(appointmentId, updateData, userId) {
        try {
            const appointment = await AppointmentRepo.getAppointmentById(appointmentId);
            if(!appointment) throw new Error("Appointment not found for updating");

            const patient = appointment.patientId.toString() === userId.toString() ? "patient" : null;
            if(!patient) throw new Error("Only patient can update appointment details");
            const updatedAppointment = await AppointmentRepo.updateAppointmentById(appointmentId, updateData);
            return updatedAppointment;
        } catch (error) {
            throw error;
        }
    }


    // function to update appointment status by appointment id
    async updateAppointmentStatus(appointmentId, status, userId) {
        try {
            const appointment = await AppointmentRepo.getAppointmentById(appointmentId);
            if(!appointment) throw new Error("Appointment not found for updating status");

            const doctor = await DoctorRepo.getDoctorById(userId);
            const receptionist = await ReceptionistRepo.getReceptionistById(userId);

            if(!doctor && !receptionist ) throw new Error("Doctor or Receptionist not found for updating appointment status");

            if(doctor && doctor.clinicId.toString() !== appointment.clinicId.toString()) throw new Error("Doctor does not belong to this clinic");
            if(receptionist && receptionist.clinicId.toString() !== appointment.clinicId.toString()) throw new Error("Receptionist does not belong to this clinic");

            const updatedAppointment = await AppointmentRepo.updateAppointmentById(appointmentId, {status});
            return updatedAppointment;
        } catch (error) {
            throw error;
        }
    }


    // function to cancel appointment by appointment id
    async cancelAppointmentByPatient(appointmentId, userId) {
        try {
            const appointment = await AppointmentRepo.getAppointmentById(appointmentId);
            if(!appointment) throw new Error("Appointment not found for cancelling");

            const patient = appointment.patientId.toString() === userId.toString() ? "patient" : null;
            if(!patient) throw new Error("Only patient can cancel appointment");

            const updatedAppointment = await AppointmentRepo.updateAppointmentById(appointmentId, {status: "cancelled"});
            return updatedAppointment;
        } catch (error) {
            throw error;
        }
    }
}

export default AppointmentService;