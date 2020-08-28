const mongoose = require('mongoose');
const User = new mongoose.Schema({

    email: {
        required: true,
        type: String,
        unique: true,
    },

    username: {
        required: true,
        type: String,
        unique: true, 
        minlength: 3,
        maxlength: 20
    },

    password: {
        required: true,
        type: String,
        minlength: 8,
        maxlength: 20
    }



})

module.exports = mongoose.model(User);  