'use strict'

const express = require('express');
const usersController = require('../controllers/users-controller');

const router = express.Router();

router.get('/', usersController.get);
router.post('/', usersController.post);

module.exports = router;