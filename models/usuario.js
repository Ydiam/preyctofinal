const mongoose = require("mongoose");
const {Schema} = require('mongoose');

const userSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    usuario: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now()
    }
    
});

module.exports = mongoose.model('users', userSchema);