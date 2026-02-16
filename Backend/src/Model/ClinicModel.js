import mongoose from 'mongoose';

const clinicSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"]
    },
    place: {
        type: String,
        required: [true, "place is required"]
    },
    ownerId: {
        type: mongoose.Schema.Types.ObjectId(),
        required: [true, "onwnerId is required"]
    },
    workingHours: {
        start: {
            required: true
        },
        end: {
            required: true
        }
    },
    averageConsultationTime: {
        type: Number,
        default: 15
    },
    status: {
        type: Sting,
        required: [true, "Status is required"],
        enum: ["Active", "Temporory Closed", "Blocked", "Open Soon", "Pending"],
        default: "Active"
    }
},{timestamps: true});

const ClinicModel = mongoose.model('clinic', clinicSchema);
export default ClinicModel;