const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        fireUid: { type: String, required: true, unique: true },
        premium: { type: Boolean, default: false },
        email: { type: String, required: true, unique: true },
        password: { type: String },
        characters: { type: [String] },
        races: { type: [String] },
        subraces: { type: [String] },
        classes: { type: [String] },
        subclasses: { type: [String] },
        spells: { type: [String] },
        items: { type: [String] },
        features: { type: [String] },

    },
    { timestamps: true }
);

const User = mongoose.model('User', userSchema);
module.exports = User;