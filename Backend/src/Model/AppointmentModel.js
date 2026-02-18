import { mongoose } from "mongoose";


const AppointmentSchema = mongoose.Schema({
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
    tokenNumber: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ["Pending", "Checked-in", "In-Progress", "Completed", "Cancelled"],
        default: "Pending"
    }
},{timestamps: true});

export default mongoose.model('appointment', AppointmentSchema);