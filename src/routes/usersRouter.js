const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');
const uploadFile = require('../middleware/usersMiddleware');
const { body } = require('express-validator')

const validations= [
    body('firstName').notEmpty().withMessage('*Tienes que escribir un nombre*'),
    body('lastName').notEmpty().withMessage('*Tienes que escribir un apellido*'),
    body('email').notEmpty().withMessage('*Tienes que escribir un correo electrónico*').bail().isEmail().withMessage('*Tienes que escribir un formato de correo válido*'),
    body('password').notEmpty().withMessage('*Tienes que escribir una contraseña*').bail().isLength({min:8}).withMessage('*La contraseña debe tener minimo 8 caracteres*'),
    body('avatar').custom((value, { req}) => {
        let file = req.file;
        if (!file){
            throw new Error('*Tienes que subir una imagen*')
        }
        return true;
    })
]

const validateLogin = [
    body('email').notEmpty().withMessage('*Tienes que escribir un correo electrónico*').bail().isEmail().withMessage('*Tienes que escribir un formato de correo válido*'),
    body('password').notEmpty().withMessage('*Tienes que escribir una contraseña*').bail().isLength({min:8}).withMessage('*La contraseña debe tener mínimo 8 caracteres*')   // Minimo 8 caracteres
];

router.get('/login', usersController.register);
// router.post('/', uploadFile.single("image"), validations, usersController.registered)

router.get('/loginRegister', usersController.login);
// router.post('/loginRegister', validateLogin, usersController.logged);

// router.get('/', usersController.profile);
// router.get('/', usersController.profile);

module.exports = router