const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');

// middlewares

const guest = require('../middleware/guestMiddleware');
const auth = require('../middleware/authMiddleware');
const lRValidations = require('../middleware/loginRegisterValidationsMiddleware');

router.get('/loginRegister',guest, usersController.register);

router.post('/loginRegister', lRValidations, usersController.registered);

router.get('/loginRegister',guest, usersController.login);

router.post('/loginRegister', lRValidations, usersController.logged);

router.get('/profile/:usersId',auth, usersController.profile);

router.get('/logout/', usersController.logout);


module.exports = router