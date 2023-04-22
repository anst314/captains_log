require('dotenv').config(); // call and configure your dotenv package
const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false })

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
app.post('/logs', urlencodedParser, function(req, res) {
    console.log(req.body)
    res.send(req.body)
})


const PORT = 3000;

app.listen(PORT)