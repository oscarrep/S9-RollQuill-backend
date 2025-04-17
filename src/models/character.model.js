const mongoose = require('mongoose');

const characterSchema = mongoose.Schema(
    {
        name: {type: String},
        race: {type: String},
        subrace: {type: String},
        class: {type: String},
        subclass: {type: String},
        level: {type: Number},
        stats: {type: [Number]},
        skills: {type: [String]},
        expertise: {type: [String]},
    },
    { timestamps: true }
);

const Character = mongoose.model('Character', characterSchema);
module.exports = Character;