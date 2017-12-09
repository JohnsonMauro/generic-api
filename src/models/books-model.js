'use strict'

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required: [true, 'O nome do livro é de preenchimento obrigatório!'],
    trim: true
  },
  author: {
    type: String,
    required: [true, 'O autor do livro é de preenchimento obrigatório!'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'O descrição do livro é de preenchimento obrigatório!']
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  },
  createDate:{
    type: Date,
    required: true,
    default: Date.now
  }
});

module.exports = mongoose.model('Books', schema);