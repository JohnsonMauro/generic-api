'use strict'

const express = require('express');
const booksController = require('../controllers/books-controller');

const router = express.Router();

router.get('/', booksController.get);
router.get('/:id', booksController.getById);
router.post('/', booksController.post);
router.put('/:id', booksController.put);
router.delete('/', booksController.delete);

module.exports = router;