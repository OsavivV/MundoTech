const { body } = require('express-validator')


const registerValidator = [
    body('firstName').notEmpty().withMessage('*Tienes que escribir un nombre*').bail().isLength({min:8}).withMessage('* El nombre debe tener minimo 8 caracteres*'),
    body('lastName').notEmpty().withMessage('*Tienes que escribir un apellido*').bail().isLength({min: 3}).withMessage('solo se aceptan Letras'),
    body('email').notEmpty().withMessage('*Tienes que escribir un correo electrónico*').bail().isEmail().withMessage('*Tienes que escribir un formato de correo electronico válido*'),
    body('password').notEmpty().withMessage('*Tienes que escribir una contraseña*').bail().isLength({min:8}).withMessage('*La contraseña debe tener minimo 8 caracteres*'),
]

const loginValidator = [
body('emaiL').notEmpty().withMessage('*Tienes que escribir un correo electrónico*').bail().isEmail().withMessage('*Tienes que escribir un formato de correo electronico válido*'),
body('passW').notEmpty().withMessage('*Tienes que escribir una contraseña*').bail().isLength({min:8}).withMessage('*La contraseña debe tener minimo 8 caracteres*'),
]

module.exports =  {loginValidator , registerValidator}