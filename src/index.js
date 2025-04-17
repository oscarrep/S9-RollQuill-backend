const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express()

dotenv.config();

app.get('/', (request, response) => {
    response.send('respone from node API');
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