const mongoose = require('mongoose')
const validator = require('validator')

const cartSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true,
        trim: true
    },
    cost: {
        type: Number,
        default: 0,
        required: true
    },
    quantity: {
        type: Number,
        default: 1,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
} , {
    timestamps: true
})

const seed = mongoose.model('seed', cartSchema)

module.exports = seed