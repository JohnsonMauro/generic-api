'use strict';

const mongoose = require('mongoose');

const CategoryModel = mongoose.model('Category');

exports.get = async() => {
  const res = await CategoryModel.find({}, 'name');
  return res;
}

exports.getById = async(id) => {
  const res = await CategoryModel.findById(req.params.id, 'name')
  return res;
}

exports.create = async(data) => {
  let category = new CategoryModel();

  category.name = data.name;

  await category.save();
}

exports.update = async(id, data) => {
  await CategoryModel.findByIdAndUpdate(id, {
    $set: {
      name: data.name
    }
  });
}

exports.delete = async(id) => {
  await CategoryModel.findOneAndRemove(id);
}