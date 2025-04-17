const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express()

dotenv.config();

app.listen(3000, () => {
    console.log('Backend server running on port 3000');
});

app.get('/', (request, response) => {
    response.send('respone from node API');
});

mongoose.connect(`${process.env.CONNECT_STR}`)
.then(()=>{
    console.log("Database connected");
})
.catch(()=>{
    console.log('Failed connection');
})