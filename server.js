dotenv = require('dotenv').config();

const express = require('express');
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose'); 
const morgan = require('morgan');
const connectionURI = process.env.MONGO;
const deprecatedObj = {useUnifiedTopology: true, useNewUrlParser: true}
const colors = require('colors')


const app = express();

app.use(express.static('public'));

//route files
const homeRouter = require('./routes/homeRouter')


app.use('/', homeRouter )






app.listen(PORT, console.log(`listening on port ${PORT}`.underline.yellow)); 