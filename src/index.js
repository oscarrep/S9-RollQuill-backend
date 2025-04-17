const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Character = require('./models/character.model.js');
const characterRoute = require('./routes/character.route.js');


const app = express()
app.use(express.json());

app.use('/api/characters', characterRoute)

dotenv.config();

app.get('/', (request, response) => {
    response.send('Respone from node API');
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