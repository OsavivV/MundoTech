const { body } = require('express-validator')


module.exports = [
    body('firstName').notEmpty().withMessage('*Tienes que escribir un nombre*'),
    body('lastName').notEmpty().withMessage('*Tienes que escribir un apellido*'),
    body('email').notEmpty().withMessage('*Tienes que escribir un correo electrónico*').bail().isEmail().withMessage('*Tienes que escribir un formato de correo válido*'),
    body('password').notEmpty().withMessage('*Tienes que escribir una contraseña*').bail().isLength({min:8}).withMessage('*La contraseña debe tener minimo 8 caracteres*'),
]

// module.exports = [
//     body('email').notEmpty().withMessage('*Tienes que escribir un correo electrónico*').bail().isEmail().withMessage('*Tienes que escribir un formato de correo válido*'),
//     body('password').notEmpty().withMessage('*Tienes que escribir una contraseña*').bail().isLength({min:8}).withMessage('*La contraseña debe tener mínimo 8 caracteres*')   // Minimo 8 caracteres
// ];

