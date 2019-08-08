const Dev = require('../models/Dev');

module.exports = {
    async store(request, response) {
        const { devId } = request.params;
        const { user } = request.headers;

        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        if (!targetDev) {
            return response.status(400).json({ error: 'Dev not exists' });
        }

        if (targetDev.likes.includes(loggedDev._id)) {
            console.log('deu match');
        }

        if (loggedDev.likes.includes(targetDev._id)) {
            return response.json(loggedDev);
        }

        loggedDev.likes.push(targetDev._id);

        await loggedDev.save();

        return response.json(loggedDev);
    }
};