import { QueueSer } from "../Composer/composer.js";

class QueueController {
    // function to get live queue for a clinic
    async getLiveQueue(req, res) {
        try {
            const clinicId = req.params.clinicId;
            const userId = req.user.id;
            if(!clinicId) throw new Error("Clinic ID is required to fetch live queue");
            const liveQueue = await QueueSer.getLiveQueue(clinicId, userId);
            res.status(200).json(liveQueue);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // function to get queue history for a clinic
    async getQueueHistory(req, res) {
        try {
            const clinicId = req.params.clinicId;
            const userId = req.user.id;
            const queueHistory = await QueueSer.getQueueHistory(clinicId);
            res.status(200).json(queueHistory);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // function to move to next token in the queue
    async nextToken(req, res) {
        try {
            const clinicId = req.params.clinicId;
            const userId = req.user.id;
            const updatedQueue = await QueueSer.nextToken(clinicId, userId);
            res.status(200).json(updatedQueue);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}
export default QueueController;