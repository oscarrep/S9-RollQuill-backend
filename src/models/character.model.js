const mongoose = require('mongoose');

const characterSchema = mongoose.Schema(
    {
        createdBy: { type: String },
        name: { type: String, required: true },
        race: { type: String, required: true },
        subrace: { type: String, required: true },
        class: { type: String, required: true },
        subclass: { type: String, required: true },
        level: { type: Number, required: true },
        speed: { type: Number },
        stats: {
            strength: { type: Number, required: true },
            dexterity: { type: Number, required: true },
            constitution: { type: Number, required: true },
            intelligence: { type: Number, required: true },
            wisdom: { type: Number, required: true },
            charisma: { type: Number, required: true },
        },
        skills: { type: [String], required: true },
        expertise: { type: [String] },
    },
    { timestamps: true }
);

const Character = mongoose.model('Character', characterSchema);
module.exports = Character;