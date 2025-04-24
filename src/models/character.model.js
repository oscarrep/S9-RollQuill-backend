const mongoose = require('mongoose');

const characterSchema = mongoose.Schema(
    {
        createdBy: { type: String },
        name: { type: String, required: true },
        race: { type: String, required: true },
        subrace: { type: String},
        class: { type: String, required: true },
        subclass: { type: String, required: true },
        level: { type: Number, required: true },
        speed: { type: Number },
        stats: {
            Strength: { type: Number, required: true },
            Dexterity: { type: Number, required: true },
            Constitution: { type: Number, required: true },
            Intelligence: { type: Number, required: true },
            Wisdom: { type: Number, required: true },
            Charisma: { type: Number, required: true },
        },
        savingThrows: { type: [String], required: true },
        skills: { type: [String], required: true },
        image: { type: String },
        expertise: { type: [String] },
    },
    { timestamps: true }
);

const Character = mongoose.model('Character', characterSchema);
module.exports = Character;