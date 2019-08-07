const express = require('express');
const mongoose = require('mongoose');

const server = express();
const routes = require('./routes');

mongoose.connect('mongodb+srv://admin:omnistack@cluster0-qkr9k.mongodb.net/tindev?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(express.json());
server.use(routes);

server.listen(3333);
