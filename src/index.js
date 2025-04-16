import express from 'express'

const app = express()

app.listen(3000,()=>{
    console.log('Backend server running on port 3000');
});

app.get('/', (request, response)=>{
    response.send('respone from node API');
})