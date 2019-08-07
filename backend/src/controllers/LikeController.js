const Dev = require('../models/Dev');

module.exports = {
    store(request, response) {
        return response.json({ ok: true })
    }
};