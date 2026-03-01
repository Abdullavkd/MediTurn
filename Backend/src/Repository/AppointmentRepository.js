import AppointmentModel from "../Model/AppointmentModel.js";


class AppointmentRepository {
    // function to book an appointment
    async bookAppointment(userId, clinicId, name, phone) {
        try {
            const newAppointment = await AppointmentModel.create({
                patientId: userId,
                clinicId,
                name,
                phone
            });
            return newAppointment;
        }catch (error) {
            throw error;
        }
    }

    // get all appointment by clinic id
    async getAppointmentsByClinicId(clinicId) {
        try {
            return await AppointmentModel.find({clinicId}).populate('patientId', '-password');
        }catch (error) {
            throw error;
        }
    }


    // get appointment details by appointment id
    async getAppointmentById(appointmentId) {
        try {
            return await AppointmentModel.findById(appointmentId).populate('patientId', '-password');
        }catch (error) {
            throw error;
        }
    }


    // function to update appointment details by appointment id
    async updateAppointmentById(appointmentId, updateData) {
        try {
            const updatedAppointment = await AppointmentModel.findByIdAndUpdate(
                appointmentId,
                {$set: updateData},
                {new: true, runValidators: true}
            ).populate('patientId', '-password');
            if(!updatedAppointment) throw new Error("Appointment not found to update");
            return updatedAppointment;
        }catch (error) {
            throw error;
        }
    }
}

export default AppointmentRepository;