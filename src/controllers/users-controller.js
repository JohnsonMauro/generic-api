'use strict'

const repository = require('../repositories/users-repository');
const ValidationContracts = require('../validators/fluent-validators');

const contract = new ValidationContracts();

exports.get = async(req, res, next) => {
  try {
    const data = await repository.get();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({
      message: 'Falha ao procesar sua requisição"'
    });
  }
};

exports.post = async(req, res, next) => {
  contract.isEmail(req.body.email, 'Email inválido!');
  contract.hasMinLen(req.body.password, 6, 'A senha não pode ser menor que 6 digítos!');

  if (!contract.isValid()) {
    res.status(500).send(contract.errors()).end();
    return;
  }

  try {
    await repository.create(req.body);
    res.status(201).send({
      message: 'Usuário cadastrado com sucesso!'
    });
  } catch (error) {
    res.status(500).send({
      message: 'Falha ao cadastrar usuário!'
    });
  }
};