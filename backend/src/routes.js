const express = require('express');

const routes = express.Router();

routes.get('/', (request, response) => {
    const name = request.query.name;
    return response.json({ message: `Hello ${name}!!!` });
});

routes.post('/devs', (request, response) => {
    console.log(request.body);
    return response.json(request.body);
});

module.exports = routes;