import { ClinicRepo, DoctorRepo, UserRepo } from "../Composer/composer.js";



class DoctorServices {

    // function to assing a doctor to a clinic
    async newDoctor(userId, clinicId, specialization, isAvailable, AvgTimePerPatient) {
        try {
            if(!userId || !clinicId || !specialization || !isAvailable || !AvgTimePerPatient) throw new Error("All Fields are Required");
            const user = await UserRepo.findById(userId);
            if(!user || user.role !== "Doctor") throw new Error("There is no user or he is not a doctor");
            return await DoctorRepo.assignDoctor(userId, clinicId, specialization, isAvailable, AvgTimePerPatient);
        } catch (error) {
            throw error;
        }
    }

    // function to get doctors  of a clinic by clinic id
    async doctorByClinicId(clinicId) {
        try {
            if(!clinicId) throw new Error("Clinic ID is required");
            const clinic = await ClinicRepo.findById(clinicId)
            if(!clinic) throw new Error("No Clinic found");
            const doctors = await DoctorRepo.getDoctorsByClinic(clinicId);
            if(doctors.length < 1) throw new Error("No doctors Listed in the Clinic");
            return doctors;
        } catch (error) {
            throw error;
        }
    }


    // function to update doctor availability
    async updateIsAvailable(userId, isAvailable) {
        try {
            if(!userId) throw new Error("User ID and isAvailable are required");
            const user = await UserRepo.findById(userId);
            if(!user || user.role !== 'Doctor') throw new Error("User is not a Doctor");
            return await DoctorRepo.updateAvailability(userId, isAvailable);
        } catch (error) {
            throw error;
        }
    }


    // function to get a doctor details by userId
    async getDoctorById(userId) {
        try {
            if(!userId) throw new Error("User ID is required");
            const user = await DoctorRepo.getDoctorById(userId);
            if(!user) throw new Error("No Doctor with provided id");
            return user;
        } catch (error) {
            throw error;
        }
    }


    // function to get available slots
    async generateSlotes(userId) {
        try {
            const slotes = [];
            const doctor = await DoctorRepo.getDoctorById(userId);
            if(!doctor) throw new Error("No Doctor with provided userId");
            const clinic = await ClinicRepo.findById(doctor.clinicId);
            if(!clinic) throw new Error("clinic not available");

            let startingTime = new Date(`2026-01-01T${clinic.workingHours.start}:00`);
            let endingTime = new Date(`2026-01-01T${clinic.workingHours.end}:00`);
            
            // if(endingTime <= startingTime) endingTime += 12 * 60 * 60 * 1000;
            // console.log(endingTime) 

            while(startingTime < endingTime) {
                const nextSlote = new Date(startingTime.getTime() + doctor.AvgTimePerPatient * 60000);
                
                if(nextSlote <= endingTime) {
                    slotes.push({
                        time: startingTime.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12: false}),
                        isBooked: false
                    })
                }

                startingTime = nextSlote;
            }
            
            return slotes;
        } catch (error) {
            throw error;
        }
    }
}

export default DoctorServices;