const path = require('path')
const morgan = require('morgan')
const express = require("express");
const cors = require('cors')

const {planetsRouter} = require('./routes/planets/planets.router')
const app = express();


app.use(cors({
    origin: 'http://localhost:3000',
}))

app.use(morgan('combined'));

app.use(express.json());

app.use(express.static(__dirname, '..', 'public'))
app.use('/planets', planetsRouter);


module.exports = app