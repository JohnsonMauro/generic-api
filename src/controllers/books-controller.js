'use strict'

const repository = require('../repositories/books-repository');
const ValidationContracts = require('../validators/fluent-validators');

const contract = new ValidationContracts();

exports.getById = async(req, res, next) => {
  try {
    const data = await repository.get(req.params.id);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({
      message: 'Falha ao procesar sua requisição"'
    });
  }
};

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
  contract.hasMinLen(req.body.name, 5, 'O nome do livro deve conter pelo menos 5 dígitos');
  contract.hasMinLen(req.body.author, 5, 'O nome do autor do livro deve conter pelo menos 5 dígitos');
  contract.hasMinLen(req.body.description, 20, 'A descrição do livro deve conter pelo menos 20 dígitos');

  if (!contract.isValid()) {
    res.status(500).send(contract.errors()).end();
    return;
  }

  try {
    await repository.create(req.body);
    res.status(201).send({
      message: 'Livro cadastrado com sucesso!'
    });
  } catch (error) {
    res.status(500).send({
      message: 'Falha ao cadastrar o livro!'
    });
  }
};

exports.put = async(req, res, next) => {
  contract.hasMinLen(req.body.name, 5, 'O nome do livro deve conter pelo menos 5 dígitos');
  contract.hasMinLen(req.body.author, 5, 'O nome do autor do livro deve conter pelo menos 5 dígitos');
  contract.hasMinLen(req.body.description, 20, 'A descrição do livro deve conter pelo menos 20 dígitos');

  if (!contract.isValid()) {
    res.status(500).send(contract.errors()).end();
    return;
  }

  try {
    await repository.update(req.params.id, req.body);
    res.status(201).send({
      message: 'Livro atualizado com sucesso!'
    });
  } catch (error) {
    res.status(500).send({
      message: 'Falha ao atualizar o livro!'
    });
  }
};

exports.delete = async(req, res, next) => {
  try {
    await repository.delete(req.body.id);
    res.status(200).send({
      message: 'Livro excluído com sucesso!'
    });
  } catch (error) {
    res.status(500).send({
      message: 'Falha ao excluir o livro!'
    });
  }
};