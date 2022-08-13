const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    descricption: {
        type: String,
        require: true,
        trim: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User'
    }
}, {
    timestamps: true
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task