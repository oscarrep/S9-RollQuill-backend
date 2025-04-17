const Character = require('../models/character.model.js')

const getCharacters = async (request, response) => {
    try {
        const characters = await Character.find({});
        response.status(200).json(characters);
    }
    catch (error) { response.status(500).json({ message: error.message }); }
}

const getCharacter = async (request, response) => {
    try {
        const { id } = request.params
        const character = await Character.findById(id);
        response.status(200).json(character);
    }
    catch (error) { response.status(500).json({ message: error.message }); }
}

const createCharacter = async (request, response) => {
    try {
        const character = await Character.create(request.body);
        response.status(200).json(character);
    }
    catch (error) { response.status(500).json({ message: error.message }); }
}

const deleteCharacter = async (request, response) => {
    try {
        const { id } = request.params
        const character = await Character.findByIdAndDelete(id);

        if (!character) return response.status(404).json({ message: "Character not found" });

        response.status(200).json({ message: `Deleted character with id: ${id}` });

    }
    catch (error) { response.status(500).json({ message: error.message }); }
}

const updateCharacter = async (request, response) => {
    try {
        const { id } = request.params
        const character = await Character.findByIdAndUpdate(id, request.body);

        if (!character) return response.status(404).json({ message: "Character not found" });

        const updatedCharacter = await Character.findById(id);
        response.status(200).json(updatedCharacter);
    }
    catch (error) { response.status(500).json({ message: error.message }); }
}

module.exports = { getCharacters, getCharacter, createCharacter, deleteCharacter, updateCharacter }