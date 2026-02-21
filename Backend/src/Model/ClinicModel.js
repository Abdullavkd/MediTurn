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
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "onwnerId is required"]
    },
    workingHours: {
        start: {
            type: String,
            required: true
        },
        end: {
            type: String,
            required: true
        }
    },
    averageConsultationTime: {
        type: Number,
        default: 15
    },
    status: {
        type: String,
        required: [true, "Status is required"],
        enum: ["Active", "Temporory Closed", "Open Soon", "Pending"],
        default: "Pending"
    },
    tokensPerDay: {
        type: Number,
        required: true
    }
},{timestamps: true});

const ClinicModel = mongoose.model('clinic', clinicSchema);
export default ClinicModel;