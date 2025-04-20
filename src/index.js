const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const Character = require('./models/character.model.js');
const characterRoute = require('./routes/character.route.js');

dotenv.config();
const app = express()

app.use(cors({
    origin: (origin, callback) => {
        const allowedOrigins = [
            //'https://s9-rollquill.vercel.app',
            'http://localhost:4200'
        ];
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
}));

app.use(express.json());

app.use(process.env.API_CHARACTERS, characterRoute)

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