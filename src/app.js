'use strict'

const express = require('express'),
 bodyParser = require('body-parser'),
 mongoose = require('mongoose');


const app = express();

// Connect MongoDB
mongoose.connect('mongodb://db_generic_api:admin@ds141796.mlab.com:41796/db_generic_api');

//Carrega os Models
const BooksModel = require('./models/books-model');
const Category = require('./models/category-model');
const Users = require('./models/users-model');

//Carrega as Rotas
const indexRoute = require('./routes/index-route');
const booksRoute = require('./routes/books-route');
const categoryRoute = require('./routes/category-route');
const usersRoute = require('./routes/users-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', indexRoute);
app.use('/books', booksRoute);
app.use('/category', categoryRoute);
app.use('/users', usersRoute);

module.exports = app;
