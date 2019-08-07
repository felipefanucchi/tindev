const axios = require('axios');

module.exports = {
    async store(request, response) {
        const { username } = request.body;
        const GITHUB_API = `https://api.github.com`;
        const axiosResponse = await axios.get(`${GITHUB_API}/users/${username}`);
        return response.json(axiosResponse.data);
    }
};