import mongoose from "mongoose";


const DoctorSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    },
    clinicId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'clinic'
    },
    specialization: {
        type: String,
        required: true,
        enum: [
            "General Medicine",
            "Pediatrics",
            "Dermatology",
            "Cardiology",
            "Orthopedics",
            "Gastroenterology",
            "Gynecology",
            "Neurology",
            "Ophthalmology",
            "ENT (Otolaryngology)",
            "Urology",
            "Psychiatry",
            "Dentistry",
            "Pulmonology",
            "Endocrinology",
            "Oncology",
            "Nephrology",
            "Rheumatology"
        ],
        default: "General Medicine"
    },
    isAvailable: {
        type: Boolean,
        default: true
    },
    AvgTimePerPatient: {
        type: Number,
    }
},{timestamps: true})

const doctorModel = mongoose.model('doctor',DoctorSchema);
export default doctorModel;