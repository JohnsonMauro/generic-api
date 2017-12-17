'use strict'

const express = require('express'),
 bodyParser = require('body-parser'),
 mongoose = require('mongoose'),
 cors = require('cors'),
 config = require('./config');

const app = express();

app.use(cors());

// Connect MongoDB
mongoose.connect(config.connectionString);

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
