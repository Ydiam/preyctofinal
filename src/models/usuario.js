const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    contraseña: {
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

module.exports = mongoose.model('user',userSchema);