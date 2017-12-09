'use strict';

const mongoose = require('mongoose');

const BooksModel = mongoose.model('Books');

exports.get = async() => {
  const res = await BooksModel.find({}, 'name author description createDate')
    .populate('category', 'name');
  return res;
}

exports.getById = async(id) => {
  const res = await BooksModel.findById(req.params.id, 'name author description category createDate')
  .populate('category', 'name');
  return res;
}

exports.create = async(data) => {
  let books = new BooksModel();

  books.name = data.name;
  books.author = data.author;
  books.description = data.description;
  books.category = data.category;

  await books.save();
}

exports.update = async(id, data) => {
  await BooksModel.findByIdAndUpdate(id, {
    $set: {
      name: data.name,
      author: data.author,
      description: data.description,
      category: data.category
    }
  });
}

exports.delete = async(id) => {
  await BooksModel.findOneAndRemove(id);
}