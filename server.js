require('dotenv').config(); // call and configure your dotenv package
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
// Data
// const fruits = require('./models/fruits');
const Fruit = require('./models/Fruit');

const app = express()
const PORT = 3000;