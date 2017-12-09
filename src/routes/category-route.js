'use strict'

const express = require('express');
const categoryController = require('../controllers/category-controller');

const router = express.Router();

router.get('/', categoryController.get);
router.get('/:id', categoryController.getById);
router.post('/', categoryController.post);
router.put('/:id', categoryController.put);
router.delete('/:id', categoryController.delete);

module.exports = router;