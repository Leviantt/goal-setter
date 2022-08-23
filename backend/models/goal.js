const mongoose = require('mongoose');

const goalSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Please add a text']
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Goal', goalSchema);