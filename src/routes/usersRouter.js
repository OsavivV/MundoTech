const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');

// middlewares
const signUpValidations = require('../middleware/signUpValidationsMiddleware');
const signInValidations = require('../middleware/signInValidationsMiddleware');



router.get('/loginRegister', usersController.register);

router.post('/loginRegister', signUpValidations, usersController.registered);

router.get('/loginRegister', usersController.login);

router.post('/loginRegister', signInValidations, usersController.logged);

router.get('/profile/:usersId', usersController.profile);


module.exports = router