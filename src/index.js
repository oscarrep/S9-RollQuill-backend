const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Characters = require('./models/character.model.js')

const app = express()
app.use(express.json());

dotenv.config();

app.get('/', (request, response) => {
    response.send('Respone from node API');
});

app.post('/api/characters', async (request, response) => {
    try {
        const character = await Characters.create(request.body);
        response.status(200).json(character);
    } catch (err) {
        response.status(500).json({ message: err.message });
    }
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