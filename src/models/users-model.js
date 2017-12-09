'use strict'

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schema = new Schema({
  email: {
    type: String,
    required: [true, 'O email é de preenchimento obrigatório!']
  },
  password: {
    type: String,
    required: [true, 'A senha é de preenchimento obrigatório!']
  },
  createDate: {
    type: Date,
    required: true,
    default: Date.now
  }
});

module.exports = mongoose.model('Users', schema);