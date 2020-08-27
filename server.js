dotenv = require('dotenv').config();

const express = require('express');
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose'); 
const morgan = require('morgan');
const connectionURI = process.env.MONGO;
const deprecatedObj = {useUnifiedTopology: true, useNewUrlParser: true}
const colors = require('colors')

const app = express();


app.get('/', (req, res) => {
    res.status(200).json({
        message: "successful get request"
    })
})

app.post('/', (req, res) => {
    res.status(200).json({
        message: "successfull post request"
    })
})

app.put('/:id', (req, res) => {
    res.status(200).json({
        message: "successfull put"
    })
})

app.delete('/:id', (req, res) => {
    res.status(200).json({
        message: "success"
    })
})


app.listen(PORT, console.log(`listening on port ${PORT}`.underline.yellow)); 