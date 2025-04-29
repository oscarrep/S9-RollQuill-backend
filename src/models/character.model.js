const mongoose = require('mongoose');

const characterSchema = mongoose.Schema(
    {
        createdBy: { type: String },
        name: { type: String, required: true },
        race: { type: String, required: true },
        subrace: { type: String },
        class: { type: String, required: true },
        subclass: { type: String, required: true },
        level: { type: Number, required: true },
        speed: { type: Number },
        ability_scores: {
            STR: [
                { name: { type: String } },
                { value: { type: Number, required: true } }
            ],
            DEX: [
                { name: { type: String } },
                { value: { type: Number, required: true } }
            ],
            CON: [
                { name: { type: String } },
                { value: { type: Number, required: true } }
            ],
            INT: [
                { name: { type: String } },
                { value: { type: Number, required: true } }
            ],
            WIS: [
                { name: { type: String } },
                { value: { type: Number, required: true } }
            ],
            CHA: [
                { name: { type: String } },
                { value: { type: Number, required: true } }
            ],
        },
        savingThrows: { type: [String], required: true },
        classSkills: { type: [String], required: true },
        backgroundSkills: { type: [String], required: true },
        image: { type: String },
        expertise: { type: [String] },
    },
    { timestamps: true }
);

const Character = mongoose.model('Character', characterSchema);
module.exports = Character;