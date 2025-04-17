const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Character = require('./models/character.model.js')


const app = express()
app.use(express.json());

dotenv.config();

app.get('/', (request, response) => {
    response.send('Respone from node API');
});

app.post('/api/characters', async (request, response) => {
    try {
        const character = await Character.create(request.body);
        response.status(200).json(character);
    }
    catch (error) { response.status(500).json({ message: error.message }); }
});

app.get('/api/characters', async (request, response) => {
    try {
        const characters = await Character.find({});
        response.status(200).json(characters);
    }
    catch (error) { response.status(500).json({ message: error.message }); }
});

app.get('/api/character/:id', async (request, response) => {
    try {
        const { id } = request.params
        const character = await Character.findById(id);
        response.status(200).json(character);
    }
    catch (error) { response.status(500).json({ message: error.message }); }
});

app.put('/api/character/:id', async (request, response) => {
    try {
        const { id } = request.params
        const character = await Character.findByIdAndUpdate(id, request.body);

        if (!character) return response.status(404).json({ message: "Character not found" });

        const updatedCharacter = await Character.findById(id);
        response.status(200).json(updatedCharacter);
    }
    catch (error) { response.status(500).json({ message: error.message }); }
});

mongoose.connect(`${process.env.CONNECT_STR}`)
    .then(() => {
        console.log("Database connected");

        app.listen(process.env.PORT, () => {
            console.log('Backend server running on port 3000');
        });
    })
    .catch(() => {
        console.log('Failed connection');
    })