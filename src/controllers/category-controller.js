'use strict'

const repository = require('../repositories/category-repository');
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
  contract.hasMinLen(req.body.name, 3, 'A categoria do livro deve conter pelo menos 3 dígitos');

  if (!contract.isValid()) {
    res.status(500).send(contract.errors()).end();
    return;
  }

  try {
    await repository.create(req.body);
    res.status(201).send({
      message: 'Categoria do livro cadastrada com sucesso!'
    });
  } catch (error) {
    res.status(500).send({
      message: 'Falha ao cadastrar a categoria do livro!'
    });
  }
};

exports.put = async(req, res, next) => {
  contract.hasMinLen(req.body.name, 3, 'A categoria do livro deve conter pelo menos 3 dígitos');

  if (!contract.isValid()) {
    res.status(500).send(contract.errors()).end();
    return;
  }

  try {
    await repository.update(req.params.id, req.body);
    res.status(201).send({
      message: 'Categoria do livro atualizado com sucesso!'
    });
  } catch (error) {
    res.status(500).send({
      message: 'Falha ao atualizar a categoria do livro!'
    });
  }
};

exports.delete = async(req, res, next) => {
  try {
    await repository.delete(req.body.id);
    res.status(200).send({
      message: 'Categoria do livro excluído com sucesso!'
    });
  } catch (error) {
    res.status(500).send({
      message: 'Falha ao excluir a categoria do livro!'
    });
  }
};