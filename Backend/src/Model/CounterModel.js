import mongoose from 'mongoose';


const counterSchema = mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    token: {
        type: Number,
        default: 0
    }
});

counterSchema.index({ createdAt: 1 }, { expireAfterSeconds: 2 * 24 * 60 * 60 }); // Expire documents after 2 days

const CounterModel = mongoose.model('Counter', counterSchema);
export default CounterModel;