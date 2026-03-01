import mongoose from "mongoose";

const appointmentSchema = mongoose.Schema({
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    },
    clinicId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'clinic'
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    token: {
        type: Number,
        required: true,
        unique: true
    },
    status: {
        type: String,
        enum: ['Pending', 'Scheduled', 'In Progress', 'Completed', 'Cancelled'],
        default: 'Pending'
    }
}, { timestamps: true });

const AppointmentModel = mongoose.model('appointment', appointmentSchema);
export default AppointmentModel;