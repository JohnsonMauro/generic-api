'use strict'

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required: [true, 'O categoria do livro é de preenchimento obrigatório!'],
    trim: true
  }
});

module.exports = mongoose.model('Category', schema);