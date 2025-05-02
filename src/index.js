const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const Character = require('./models/character.model.js');
const characterRoute = require('./routes/character.route.js');
const User = require('./models/user.model.js');
const userRoute = require('./routes/user.route.js');

dotenv.config();
const app = express()

const allowedOrigins = [
    'https://s9-rollquill.vercel.app',
    'http://localhost:4200'
];

app.use((req, res, next) => {
    const origin = req.headers.origin;
    if (!origin || allowedOrigins.includes(origin)) {
        next();
    } else {
        return res.status(403).json({ message: `CORS Rejected: ${origin}` });
    }
});

app.use(cors({
    origin: allowedOrigins,
    credentials: true
}));

app.use(express.json());

app.use(process.env.API_CHARACTERS, characterRoute)
app.use(process.env.API_USERS, userRoute)

app.get('/', (request, response) => {
    response.send('Respone from node API');
});

mongoose.connect(`${process.env.CONNECT_STR}`)
    .then(() => {
        console.log("Database connected");

        app.listen(process.env.PORT, () => {
            console.log('Backend server running on port ', process.env.PORT);
        });
    })
    .catch((err) => {
        console.log('Failed connection: ', err);
    })