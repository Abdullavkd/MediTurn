import CounterModel from "../Model/CounterModel.js";


class CounterRepository {
    async getNextTokenNumber(tokenName) {
        try {
            const counter = await CounterModel.findOneAndUpdate(
                { id: tokenName },
                { $inc: { token: 1 } },
                { new: true, upsert: true }
            );
            return counter.token;
        } catch (error) {
             throw error;
        }
    }
}

export default CounterRepository;