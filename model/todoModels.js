const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    todo: {
        type: String,
        required: [true, 'please add your todos']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('todos', TodoSchema);

