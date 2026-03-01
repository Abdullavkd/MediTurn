import { CounterRepo } from "../Composer/composer.js";


class CounterService {
    // function to create new token number
    async getNextTokenNumber(clinicId) {
        try {
            const today = new Date().toISOString().split('T')[0];
            const tokenName = `token${clinicId}_${today}`;

            const nextTokenNumber = await CounterRepo.getNextTokenNumber(tokenName);
            return nextTokenNumber;
        } catch (error) {
             throw error;
        }
    }
}

export default CounterService;