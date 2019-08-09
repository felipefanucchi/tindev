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

        if (loggedDev.dislikes.includes(targetDev._id)) {
            return response.json(loggedDev);
        }

        loggedDev.dislikes.push(targetDev._id);

        await loggedDev.save();
        
        console.log(`${user} deu dislike no(a), ${targetDev.user}.`);

        return response.json(loggedDev);
    }
};