const axios = require('axios');
const Dev = require('../models/Dev');

const GITHUB_API = `https://api.github.com`;

module.exports = {
    async store(request, response) {
        const { username: user } = request.body;
        const axiosResponse = await axios.get(`${GITHUB_API}/users/${user}`);
        const userExists = await Dev.findOne({ user });

        if (userExists) {
            return response.json(userExists);
        }

        const { avatar_url: avatar, name, bio  } = axiosResponse.data;

        const dev = await Dev.create({
            name,
            user,
            bio,
            avatar
        });

        return response.json(dev);
    },

    async index(request, response) {
        // Aqui deve listar todos usuario cadastrados
        // Exceto, usuarios que deram likes, dislikes e ele mesmo.
        
        return response.json({ ok: true })
    }
};