import mongoose from "mongoose";


const DoctorSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    clinicId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
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
})

const DoctorModel = mongoose.model('doctor',DoctorSchema);
export default DoctorModel;