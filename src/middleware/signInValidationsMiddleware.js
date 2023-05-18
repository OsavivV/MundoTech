const { body } = require('express-validator')

module.exports = [
    body('emaiL').notEmpty().withMessage('*Tienes que escribir un correo electrónico*').bail().isEmail().withMessage('*Tienes que escribir un formato de correo válido*'),
    body('passW').notEmpty().withMessage('*Tienes que escribir una contraseña*').bail().isLength({min:8}).withMessage('*La contraseña debe tener mínimo 8 caracteres*')   // Minimo 8 caracteres
];