require('dotenv').config(); // call and configure your dotenv package
const express = require('express');
const mongoose = require('mongoose');

//const methodOverride = require('method-override');
// Data
// const fruits = require('./models/fruits');
//const Fruit = require('./models/Fruit');

const app = express()
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());
app.get('/', function (req, res) {
    res.render('New')
  })



const PORT = 3000;

app.listen(PORT)