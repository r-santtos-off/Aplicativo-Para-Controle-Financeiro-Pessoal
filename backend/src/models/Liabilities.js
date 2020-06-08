const mongoose = require('mongoose');

const LiabilitiesSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    },
    liabilitiesName: {
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

module.exports = mongoose.model('Liabilities', LiabilitiesSchema);