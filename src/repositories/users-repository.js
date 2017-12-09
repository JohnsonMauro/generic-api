'use strict';

const mongoose = require('mongoose');

const UsersModel = mongoose.model('Users');

exports.get = async() => {
  const res = await UsersModel.find({}, 'email password createDate');
  return res;
}

exports.create = async(data) => {
  let users = new UsersModel();

  users.email = data.email;
  users.password = data.password;

  await users.save();
}