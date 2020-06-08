const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        lowercase: true,
    },
    password: {
        type: String,
        require: true,
        select: false,
    },
    createAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('User', UserSchema);