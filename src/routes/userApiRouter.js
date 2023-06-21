const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');

// middlewares

const guest = require('../middleware/guestMiddleware');
const auth = require('../middleware/authMiddleware');
const {loginValidator,  registerValidator} = require('../middleware/loginRegisterValidationsMiddleware');
// Rutas de usuarios

router.get('/', usersController.listUser);

router.get('/register',guest, usersController.register);

router.post('/register', registerValidator, usersController.createUser);


router.put('/update/:id', registerValidator, usersController.updateUser);

router.delete('/Delete/:id', registerValidator, usersController.destroyUser);


// Rutas de autenticación
router.get('/login',guest, usersController.login);


router.post('/login', loginValidator, usersController.logged);

router.get('/profile',auth, usersController.profile);


router.get('/logout/', usersController.logout);

router.get('/:id', usersController.readUser);

module.exports = router