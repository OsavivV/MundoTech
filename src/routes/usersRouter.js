const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');

// middlewares
const validations = require('../middleware/validMiddleware');



router.get('/loginRegister', usersController.register);

router.post('/loginRegister', validations, usersController.registered);

router.get('/loginRegister', usersController.login);

router.get('/profile/:usersId', usersController.profile);


module.exports = router