const { Schema, model } = require('mongoose');
const DevSchema = new Schema({
    name: {
        type: string,
        required: true
    },
    user: {
        type: string,
        required: true
    },
    bio: String,
    avatar: {
        type: string,
        required: true
    }
}, {
    timestamps: true
});

module.exports = model('Dev', DevSchema);