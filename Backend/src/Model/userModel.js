import mongoose, { mongo } from 'mongoose'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is Required"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Email Is Required"],
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'please provide a valid email id'],
        unique: true,
        lowercase: true,
        trim: true
    },
    password:{
        type: String,
        required: [true, "password is required"],
        minlength: 6
    },
    role: {
        type: String,
        required: true,
        enum: ['Patient', 'Doctor', 'ClinicAdmin', 'SuperAdmin', 'Receptionist'],
        default: 'Patient'
    },
    status: {
        type: String,
        required: true,
        enum: ['active', 'blocked'],
        default: 'active'
    }
},{timestamps: true});

const userModel = mongoose.model('user',userSchema);
export default userModel;