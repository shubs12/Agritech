const mongoose = require('mongoose')
const validator = require('validator')

const taskSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true,
        trim: true
    },
    variety: {
        type: String,
        required: true
    },
    nob: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        default: 0,
        required: true
    },
    available: {
        type: Number
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
} , 
{
    timestamps: true
})

const crop = mongoose.model('crops', taskSchema)

module.exports = crop