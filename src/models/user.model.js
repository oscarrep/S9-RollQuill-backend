const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        id: {
            type: Number,
        },
        username: {
            type: String,
            required: [true, 'Enter valid username']
        },
        pass: {
            type: String,
            required: [true, 'Enter valid password']
        },
        characters: {
            type: [Number],
            default: [],
        },
        premium: {
            type: Boolean,
            default: false,
            required: true
        },
    },
    { timestamps: true }
);


const User = mongoose.model('User', userSchema);
module.exports = User;