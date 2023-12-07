const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true
    },
    hashPassword: {
        type: String,
        require: true
    },
    role: {
        type: String,
        require: true,
        trim: true
    },
    date: Date,
    resetToken: String,
    resetTokenExpiration: Date,
})

module.exports = mongoose.model('userSchema', userSchema)