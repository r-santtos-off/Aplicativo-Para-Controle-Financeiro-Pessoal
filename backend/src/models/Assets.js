const mongoose = require('mongoose');

const AssestSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    },
    assetName: {
        type: String,
        require: true,
    },
    category: {
        type: String,
        require: true,
    },
    dateDay: {
        type: Date,
        require: true,
    },
    value: {
        type: Number,
        require: true,
    },
    createAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Assets', AssestSchema);