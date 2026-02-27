import mongoose from "mongoose";


const receptionistSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    },
    clinicId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'clinic'
    }
},{timestamps: true})

const receptionistModel = mongoose.model('receptionist',receptionistSchema);
export default receptionistModel;